import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication-service/publication.service';
import { AnimalType } from 'src/app/constants/animal-type.enum';
import { PublicationType } from 'src/app/constants/publication-type.enum';
import { PublicationDTO } from '../../model/publication-dto';
import { AnimalDTO } from '../../model/animalDTO';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserDTO } from 'src/app/model/userDTO';
import { LoginDTO } from 'src/app/model/loginDTO';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { UrlManagerFirebase } from 'src/app/utilities/UrlManagerFirebase.service';
import { ErrorHandlerController } from 'src/app/generic-components/ErrorHandlerController';

@Component({
  selector: 'app-publication-create',
  templateUrl: './publication-create.component.html',
  styleUrls: ['./publication-create.component.css']
})
export class PublicationCreateComponent implements OnInit {

  userDTO: UserDTO;
  loginDTO: LoginDTO;
  publicationDTO: PublicationDTO = new PublicationDTO();
  animalDTO: AnimalDTO = new AnimalDTO();
  submitted = false;
  imagesAreUploaded: boolean = false;
  imagesAreSaveFire: boolean = false;
  createSuccess = false;
  failCreate = false;
  errorText;

  animalTypeSelected: AnimalType;
  animalTypes = [AnimalType.BIRD, AnimalType.CAT, AnimalType.DOG];

  publicationTypeSelected: PublicationType;
  publicationTypes = [PublicationType.FOUND, PublicationType.LOST];

  constructor(private publicationService: PublicationService, private router: Router, private authService: AuthService, 
              private storage: AngularFireStorage, private urlManagerFirebase: UrlManagerFirebase, private handlerEr: ErrorHandlerController) { }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;


  images = [];
  myForm = new FormGroup({
    tipo: new FormControl('', [Validators.required]),
    tipoPub: new FormControl('', [Validators.required]),
    raza: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    ubi: new FormControl('', [Validators.required])
  });
  
  uploadedImages = [];
  myFormUploadedImages = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });

  imagesToSave = [];
  arrayInputImageUser = [];

  get controls() { return this.myForm.controls; }

  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      this.userDTO = data;
    }, error => console.log(error));
  }

  onSubmit() {
  }

  createPublication() {
    this.submitted = true;
    this.animalDTO.AnimalType = this.animalTypeSelected;

    this.publicationDTO.PublicationType = this.publicationTypeSelected;
    this.publicationDTO.PublicationLocation = "Prueba location";
    this.publicationDTO.Photos = this.arrayInputImageUser;
    this.publicationDTO.AnimalDTO = this.animalDTO;
    this.publicationDTO.UserDTO = this.userDTO;

    console.log('Imprimo el DTO a crear:', this.publicationDTO);
    this.publicationService.createPublication(this.publicationDTO).subscribe(data => (this.createSuccess = true, this.failCreate = false)
    , error => (this.failCreate = true, this.errorText = this.handlerEr.handleError(error)));
    
    //this.goToProfile()
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  onUpload(event) {

    //Limpio la lista para la nueva carga
    this.imagesToSave = [];
    this.imagesAreUploaded = true;

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (etherEvent: any) => {
          //console.log(event.target.result);
          this.uploadedImages.push(etherEvent.target.result);
          this.myFormUploadedImages.patchValue({
            fileSource: this.uploadedImages
          });
        }
        reader.readAsDataURL(event.target.files[i]);
        this.imagesToSave.push(event.target.files[i]);
      }
    }
  }

  removeSelectedFile(index) {
    // Delete the item from fileNames list
    this.uploadedImages.splice(index, 1);

    //Actualizo las imágenes que se eliminaron
    this.imagesToSave.splice(index, 1);
    
  }

  saveURLsImgFireBase() {

    for (let index = 0; index < this.imagesToSave.length; index++) {
      const id = Math.random().toString(36).substring(2);
      const file = this.imagesToSave[index];
      const folder = this.urlManagerFirebase.getPathToSaveImageByPublicationType(this.publicationTypeSelected);
      const filePath = `${folder}MiArchivo_${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      
      task.snapshotChanges().pipe(tap(console.log),finalize(
        async() => {
          this.urlImage = await ref.getDownloadURL().toPromise();
          this.arrayInputImageUser.push(this.urlImage);
        }
        )).subscribe();
      }

  
  this.imagesAreSaveFire = true;

      console.log('Img Firebase', this.arrayInputImageUser);
  }
}