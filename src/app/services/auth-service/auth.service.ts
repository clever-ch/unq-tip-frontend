import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { UrlManagerAuthService } from 'src/app/utilities/urlManagerAuthService.service';
import { LoginDTO } from 'src/app/model/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private urlManagerAuthService: UrlManagerAuthService, public router: Router) { }

  login(loginDTO: Object): Observable<Object> {
    return this.http.post(`${this.urlManagerAuthService.getURLUserLogin()}`, loginDTO);
  }

  redirectUserProfile() {
    this.router.navigate(['profile']);
  }

  loggedInUserExists(loginDTO: LoginDTO): Observable<Object> {
    return this.http.post(`${this.urlManagerAuthService.getURLValidateUser()}`, loginDTO);
  }

  getUserByGuid(guid: string): Observable<any>{
    return this.http.get(`${this.urlManagerAuthService.getURLFindUser()}/${guid}`);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('loginDTO'));
    return user !== null;
  }
}
