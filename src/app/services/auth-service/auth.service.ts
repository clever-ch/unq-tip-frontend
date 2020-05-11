import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { UrlManagerAuthService } from 'src/app/utilities/urlManagerAuthService.service';
import { UserDTO } from 'src/app/model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private urlManagerAuthService: UrlManagerAuthService, public router: Router) { }

  login(loginDTO: Object): Observable<Object> {
    return this.http.post(`${this.urlManagerAuthService.getURLUserLogin()}`, loginDTO);
  }

  redirectUserProfile(userDTO: UserDTO) {
    this.router.navigate(['profile', userDTO]);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userDTO'));
    return user !== null;
  }
}
