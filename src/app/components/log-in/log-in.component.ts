import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginDTO } from 'src/app/model/loginDTO';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  loginDTO: LoginDTO;
  userData: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginDTO = new LoginDTO();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formulario() { return this.loginForm.value; }

  onSubmit() { }

  onLogin() {
    this.loadLoginDTOByFormGroup();
    this.authService.login(this.loginDTO).subscribe(this.saveStorage());
  }

  private loadLoginDTOByFormGroup() {
    this.loginDTO.Username = this.formulario.username;
    this.loginDTO.Password = this.formulario.password;
  }

  private saveStorage(): (value: Object) => void {
    return user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('userDTO', JSON.stringify(this.userData));
        this.authService.redirectUserProfile(this.userData);
      }
      else {
        localStorage.setItem('userDTO', null);
        this.userData = null;
        //Si no existe el usuario debería lanzar excepcion, catchearla y mostrar error
      }
    };
  }
}