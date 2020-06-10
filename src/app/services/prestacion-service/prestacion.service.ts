import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPrestacionService } from 'src/app/utilities/urlManagerPrestacion.service';

@Injectable({
  providedIn: 'root'
})
export class PrestacionService {

  constructor(private http: HttpClient, private urlManagerPrestacionService: UrlManagerPrestacionService) { }

  getAllServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllServices()}`);
  }

  getAllCareServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllCareServices()}`);
  }

  getAllTransitServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransitServices()}`);
  }

  getAllTransportServices(): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLAllTransportServices()}`);
  }
}
