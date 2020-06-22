import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UrlManagerPrestacionService {

    getURLAllCareServices(): string {
        return 'http://localhost:8080/api/v1/allCareServices';
    }

    getURLAllTransitServices(): string {
        return 'http://localhost:8080/api/v1/allTransitServices';
    }

    getURLAllTransportServices(): string {
        return 'http://localhost:8080/api/v1/allTransportServices';
    }

    getURLAllCareServicesByIdUser(): string {
        return 'http://localhost:8080/api/v1/allUserCareServices';
    }

    getURLAllTransitServicesByIdUser(): string {
        return 'http://localhost:8080/api/v1/allUserTransitServices';
    }

    getURLAllTransportServicesByIdUser(): string {
        return 'http://localhost:8080/api/v1/allUserTransportServices';
    }

    getURLServiceByIdAndTypeService(): string {
        return 'http://localhost:8080/api/v1/service';
      }
}