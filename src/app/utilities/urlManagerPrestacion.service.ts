import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UrlManagerPrestacionService {

    getURLAllServices(): string {
        return 'http://localhost:8080/api/v1/allServices';
    }

    getURLAllCareServices(): string {
        return 'http://localhost:8080/api/v1/allCareServices';
    }

    getURLAllTransitServices(): string {
        return 'http://localhost:8080/api/v1/allTransitServices';
    }

    getURLAllTransportServices(): string {
        return 'http://localhost:8080/api/v1/allTransportServices';
    }
}