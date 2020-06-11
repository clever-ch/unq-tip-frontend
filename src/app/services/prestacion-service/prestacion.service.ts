import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPrestacionService } from 'src/app/utilities/urlManagerPrestacion.service';

@Injectable({
  providedIn: 'root'
})
export class PrestacionService {

  constructor(private http: HttpClient, private urlManagerPrestacionService: UrlManagerPrestacionService) { }

  getAllCareServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllCareServices()}`);
  }

  getAllTransitServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransitServices()}`);
  }

  getAllTransportServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransportServices()}`);
  }

  getAllCareServicesByIdUser(idUser: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllCareServicesByIdUser()}/${idUser}`);
  }

  getAllTransitServicesByIdUser(idUser: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransitServicesByIdUser()}/${idUser}`);
  }

  getAllTransportServicesByIdUser(idUser: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransportServicesByIdUser()}/${idUser}`);
  }
}
