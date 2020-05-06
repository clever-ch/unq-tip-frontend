import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlManagerPublicationService } from 'src/app/utilities/urlManagerPublication.service';
import { LoginDTO } from 'src/app/model/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/log-in';

  constructor(private http: HttpClient) { }

  //newLoginDTO: LoginDTO = new LoginDTO();

  login(loginDTO: Object): Observable<Object> {
    // console.log("Imprimo el LoginDTO que llega al servicio:");
    // console.log(loginDTO);

    //console.log("Sigue respuesta del POST (servicio):");
    return this.http.post(`${this.baseUrl}`, loginDTO);
  }
}
