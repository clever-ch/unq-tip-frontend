import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/userDTO';
import { PersonDTO } from 'src/app/model/PersonDTO';
import { SigninService } from 'src/app/services/login-service/signin.service';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private signinService: SigninService) { }

  ngOnInit() {
    this.signin = this.formBuilder.group({
      nomb: ['', Validators.required],
      ape: ['', Validators.required],
      phone: ['', Validators.required],
      dir: ['', Validators.required],
      loc: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.signin.controls; }

  onSubmit() {
    this.submitted = true;
    this.save()
  }

  save() {
    this.userDTO.PersonDTO = this.personDTO;

    this.signinService.createUser(this.userDTO).subscribe(data => console.log(data), error => console.log(error));
  }
  
  goToLogin() {
      this.router.navigate(['/log-in']);
  }
  
}
