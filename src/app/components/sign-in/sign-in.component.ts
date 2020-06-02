import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/userDTO';
import { PersonDTO } from 'src/app/model/PersonDTO';
import { SigninService } from 'src/app/services/login-service/signin.service';
import { ErrorHandlerController } from 'src/app/generic-components/ErrorHandlerController';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  signin: FormGroup;
  submitted = false;
  userDTO: UserDTO = new UserDTO();
  personDTO: PersonDTO = new PersonDTO();
  createSuccess = false;
  failCreate = false
  errorText;

  constructor(private formBuilder: FormBuilder, private router: Router, private signinService: SigninService,
    private handlerEr: ErrorHandlerController) { }

  ngOnInit() {
    this.signin = this.formBuilder.group({
      nomb: ['', Validators.required],
      ape: ['', Validators.required],
      phone: ['', Validators.required],
      dir: ['', Validators.required],
      loc: ['', Validators.required],
      username: ['',Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required]
  });
  }

  get f() { return this.signin.controls; }

  onSubmit() {
    this.submitted = true;
    this.save()
  }

  save() {
    this.userDTO.PersonDTO = this.personDTO;
    this.signinService.createUser(this.userDTO).subscribe(data => (this.createSuccess = true, this.failCreate = false)
      , error => (this.failCreate = true, this.errorText = this.handlerEr.handleError(error)));
  }

  goToLogin() {
      this.router.navigate(['/log-in']);
  }
  
}
