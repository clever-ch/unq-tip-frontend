import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  signin: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent
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

    if (this.signin.invalid) {
        return;
    }

}
  
}
