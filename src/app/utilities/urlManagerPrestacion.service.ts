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

    getURLTransitServiceByIdAndTypeService(): string {
        return 'http://localhost:8080/api/v1/service/Transit';
    }

    getURLTransportServiceByIdAndTypeService(): string {
        return 'http://localhost:8080/api/v1/service/Transport';
    }

    getURLCareServiceByIdAndTypeService(): string {
        return 'http://localhost:8080/api/v1/service/Care';
    }

    getURLEditTransitService(): string {
        return 'http://localhost:8080/api/v1/editService/Transit';
    }

    getURLEditTransportService(): string {
        return 'http://localhost:8080/api/v1/editService/Transport';
    }

    getURLEditCareService(): string {
        return 'http://localhost:8080/api/v1/editService/Care';
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

    getURLCreateTransitService(): string {
        return 'http://localhost:8080/api/v1/createTransitService';
    }

    getURLCreateTransportService(): string {
        return 'http://localhost:8080/api/v1/createTransportService';
    }

    getURLCreateCareService(): string {
        return 'http://localhost:8080/api/v1/createCareService';
    }
}