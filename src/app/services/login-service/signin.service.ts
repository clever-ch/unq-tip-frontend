import { Injectable } from '@angular/core';
import { UrlManagerSigninService } from 'src/app/utilities/urlManagerSigninService.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient, private urlManagerSignin: UrlManagerSigninService) { }

  createUser(userDTO: Object): Observable<Object> {
    return this.http.post(`${this.urlManagerSignin.getURLCreateUser()}`, userDTO);
  }

  updateUser(userDTO: Object): Observable<Object> {
    return this.http.put(`${this.urlManagerSignin.getURLEditProfile()}`, userDTO);
  }
}
