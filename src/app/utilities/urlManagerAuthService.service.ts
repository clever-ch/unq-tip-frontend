import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UrlManagerAuthService {

    getURLPublicationsUserLoggedIn(): string {
        //TODO: Actualizar URL por la correcta
        return 'http://localhost:8080/api/v1/allPublicationsLost';
    }

    getURLServicesUserLoggedIn(): string {
        //TODO: Actualizar URL por la correcta
        return 'http://localhost:8080/api/v1/allPublicationsLost';
    }

    getURLUserLogin(): string {
        return 'http://localhost:8080/api/v1/log-in';
    }

    getURLValidateUser(): string {
        return 'http://localhost:8080/api/v1/validate-user';
    }

    getURLFindUser(): string {
        return 'http://localhost:8080/api/v1/users';
    }
}