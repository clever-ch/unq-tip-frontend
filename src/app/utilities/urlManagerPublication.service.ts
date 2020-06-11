import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UrlManagerPublicationService {

    getURLAllPublicationsFound(): string {
        return 'http://localhost:8080/api/v1/allPublicationsFound';
    }

    getURLAllPublicationsLost(): string {
        return 'http://localhost:8080/api/v1/allPublicationsLost';
    }

    getURLCreatePublication(): string {
        return 'http://localhost:8080/api/v1/createPublication';
    }

    getURLAllPublicationsLostByIdUser(): string {
        return 'http://localhost:8080/api/v1/allUserPublicationsLost';
    }
    
    getURLAllPublicationsFoundByIdUser(): string {
        return 'http://localhost:8080/api/v1/allUserPublicationsFound';
    }

}