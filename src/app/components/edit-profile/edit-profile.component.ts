import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { SigninService } from 'src/app/services/login-service/signin.service';
import { UserDTO } from 'src/app/model/userDTO';
import { PersonDTO } from 'src/app/model/PersonDTO';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/model/loginDTO';
import { ErrorHandlerController } from 'src/app/generic-components/ErrorHandlerController';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfile: FormGroup;
  submitted = false;
  userDTO: UserDTO;
  personDTO: PersonDTO;
  loginDTO: LoginDTO;
  editSuccess = false;
  failEdit = false;
  inputVar = 'password';
  guid: string;
  errorMsg;
  
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, 
    private signinService: SigninService, private formBuilder: FormBuilder, private handlerEr: ErrorHandlerController) { }

  ngOnInit() {
    
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);

    this.editProfile = this.formBuilder.group({
        nombE: ['', Validators.required],
        apeE: ['', Validators.required],
        phoneE: ['', Validators.required],
        dirE: ['', Validators.required],
        locE: ['', Validators.required],
        usernameE: ['',Validators.required],
        emailE: ['', Validators.required],
        passE: ['', Validators.required]
    });
  }

  get f() { return this.editProfile.controls; }
  
  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid)
      .subscribe(data => {
         this.userDTO = data;
         this.personDTO = this.userDTO.PersonDTO; 
    }, error => console.log(error));
}

  onSubmit() {
    this.submitted = true;
    this.updateProfile();    
  }

  updateProfile(){
    this.signinService.updateUser(this.userDTO)
      .subscribe(data => (this.editSuccess = true, this.failEdit = false), 
      error => (this.failEdit = true, this.errorMsg = this.handlerEr.handleError(error)));
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  showPass() {
    if (this.inputVar === 'password'){
      this.inputVar = 'text'
    } else {
      this.inputVar = 'password'
    }
  }
  
}
