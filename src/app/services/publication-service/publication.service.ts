import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPublicationService } from 'src/app/utilities/urlManagerPublication.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = 'http://localhost:8080/api/v1/publications';

  constructor(private http: HttpClient, private urlManagerPublication: UrlManagerPublicationService) { }

  getPublicationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllPublicationsFound(): Observable<any> {
    return this.http.get(`${this.urlManagerPublication.getURLAllPublicationsFound()}`);
  }
}
