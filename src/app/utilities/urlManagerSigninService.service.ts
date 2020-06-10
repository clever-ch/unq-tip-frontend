import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class UrlManagerSigninService{
    
    getURLCreateUser(): string {
        return 'http://localhost:8080/api/v1/createUser';
    }

    getURLEditProfile(): string {
        return 'http://localhost:8080/api/v1/editProfile';
    }
  }