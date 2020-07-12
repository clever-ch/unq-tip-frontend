import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginDTO } from 'src/app/model/loginDTO';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  loginDTO: LoginDTO;
  userData: any;
  submitted = false;
  failCreate = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginDTO = new LoginDTO();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get controls() { return this.loginForm.controls; }
  
  get formulario() { return this.loginForm.value; }

  onSubmit() { }

  onLogin() {
    this.submitted = true;
    this.loadLoginDTOByFormGroup();
    this.authService.login(this.loginDTO).subscribe(this.saveStorage(), error => this.failCreate = true );
  }

  private loadLoginDTOByFormGroup() {
    this.loginDTO.Username = this.formulario.username;
    this.loginDTO.Password = this.formulario.password;
  }

  private saveStorage(): (value: Object) => void {
    return user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('loginDTO', JSON.stringify(this.userData));
        this.authService.redirectUserProfile();
      }
      else {
        localStorage.setItem('loginDTO', null);
        this.userData = null;
      }
    };
  }
}