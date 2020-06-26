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

    //Por alguna razón para los DELETE no funciona devolver la url por string con el UrlManager
    getURLDeleteTransitServiceById(): string {
        return 'http://localhost:8080/api/v1/deleteTransitService';
    }

    getURLDeleteTransportServiceById(): string {
        return 'http://localhost:8080/api/v1/deleteTransportService';
    }

    getURLDeleteCareServiceById(): string {
        return 'http://localhost:8080/api/v1/deleteCareService';
    }
}