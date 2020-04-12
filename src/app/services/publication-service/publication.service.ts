import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = 'http://localhost:8080/api/v1/publications';

  constructor(private http: HttpClient) { }

  getPublicationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
