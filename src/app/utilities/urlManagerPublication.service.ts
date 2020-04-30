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
}