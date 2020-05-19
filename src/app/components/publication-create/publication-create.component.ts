import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication-service/publication.service';
import { AnimalType } from 'src/app/constants/animal-type.enum';
import { PublicationType } from 'src/app/constants/publication-type.enum';
import { PublicationDTO } from '../../model/publication-dto';
import { AnimalDTO } from '../../model/animalDTO';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserDTO } from 'src/app/model/userDTO';
import { LoginDTO } from 'src/app/model/loginDTO';


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
  
  animalTypeSelected: AnimalType;
  animalTypes = [AnimalType.BIRD, AnimalType.CAT, AnimalType.DOG];
  
  publicationTypeSelected: PublicationType;
  publicationTypes = [PublicationType.FOUND, PublicationType.LOST];

  constructor(private publicationService: PublicationService, private router: Router, private authService: AuthService) { }


  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      console.log(data)
      this.userDTO = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.createPublication();
  }

  createPublication() {
    this.animalDTO.AnimalType = this.animalTypeSelected;

    this.publicationDTO.PublicationType = this.publicationTypeSelected;
    this.publicationDTO.PublicationLocation = "Prueba location";
    this.publicationDTO.Photos = [];

    this.publicationDTO.AnimalDTO = this.animalDTO;
    console.log("Imprimo UserDTO antes de asignarlo:");
    console.log(this.publicationDTO);
    this.publicationDTO.UserDTO = this.userDTO;


    console.log("Imprimo publicationDTO creado:");
    console.log(this.publicationDTO);

    this.publicationService.createPublication(this.publicationDTO).subscribe(data => console.log(data), error => console.log(error));
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
