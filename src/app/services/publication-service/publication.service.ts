import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPublicationService } from 'src/app/utilities/urlManagerPublication.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private urlManagerPublication: UrlManagerPublicationService) { }

  getAllPublicationsLost(): Observable<any> {
    return this.http.get(`${this.urlManagerPublication.getURLAllPublicationsLost()}`);
  }

  getAllPublicationsFound(): Observable<any> {
    return this.http.get(`${this.urlManagerPublication.getURLAllPublicationsFound()}`);
  }

  createPublication(publicationDTO: Object): Observable<Object> {
    return this.http.post(`${this.urlManagerPublication.getURLCreatePublication()}`, publicationDTO);
  }

  getAllPublicationsLostByIdUser(idUser: number): Observable<any> {
    return this.http.get(`${this.urlManagerPublication.getURLAllPublicationsLostByIdUser()}/${idUser}`);
  }

  getAllPublicationsFoundByIdUser(idUser: number): Observable<any> {
    return this.http.get(`${this.urlManagerPublication.getURLAllPublicationsFoundByIdUser()}/${idUser}`);
  }
}
