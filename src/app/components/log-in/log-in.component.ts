import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginDTO = new LoginDTO();

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formulario() { return this.loginForm.controls; }

  onSubmit() {
    this.loginDTO.username = this.formulario.username.value;
    this.loginDTO.password = this.formulario.password.value;

    //console.log("Imprimo respuesta desde el componente:");
    this.authService.login(this.loginDTO).subscribe(response => {console.log(response)});
  }
}
