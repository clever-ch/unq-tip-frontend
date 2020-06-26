import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPrestacionService } from 'src/app/utilities/urlManagerPrestacion.service';
import { TypeService } from 'src/app/constants/type-service.enum';
import { TransitServiceDTO } from 'src/app/model/transitServiceDTO';

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

  getTransitServiceByIdAndTypeService(idService: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLTransitServiceByIdAndTypeService()}/${idService}`);
  }

  getTransportServiceByIdAndTypeService(idService: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLTransportServiceByIdAndTypeService()}/${idService}`);
  }

  getCareServiceByIdAndTypeService(idService: number): Observable<any> {
    return this.http.get(`${this.urlManagerPrestacionService.getURLCareServiceByIdAndTypeService()}/${idService}`);
  }

  updateTransitService(service: Object): Observable<Object>{
    return this.http.put(`${this.urlManagerPrestacionService.getURLEditTransitService()}`, service);
  }

  updateTransportService(service: Object): Observable<Object>{
    return this.http.put(`${this.urlManagerPrestacionService.getURLEditTransportService()}`, service);
  }

  updateCareService(service: Object): Observable<Object>{
    return this.http.put(`${this.urlManagerPrestacionService.getURLEditCareService()}`, service);
  }

  deleteTransitServiceById(id: number): Observable<any>{
    return this.http.delete(`${'http://localhost:8080/api/v1/deleteTransitService'}/${id}`, { responseType: 'text' });
  }

  deleteTransportServiceById(idTransport: number): Observable<any>{
    return this.http.delete(`${'http://localhost:8080/api/v1/deleteTransportService'}/${idTransport}`, { responseType: 'text' });
  }

  deleteCareServiceById(idCare: number): Observable<any>{
    return this.http.delete(`${'http://localhost:8080/api/v1/deleteCareService'}/${idCare}`, { responseType: 'text' });
  }
}
