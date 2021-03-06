import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginDTO } from 'src/app/model/loginDTO';
import { UserDTO } from 'src/app/model/userDTO';
import { PrestacionService } from 'src/app/services/prestacion-service/prestacion.service';
import { TransitServiceDTO } from 'src/app/model/transitServiceDTO';
import { TransportServiceDTO } from 'src/app/model/transportServiceDTO';
import { CareServiceDTO } from 'src/app/model/careServiceDTO';
import { TypeService } from 'src/app/constants/type-service.enum';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO;
  transitServices: Observable<TransitServiceDTO[]>;
  transportServices: Observable<TransportServiceDTO[]>;
  careServices: Observable<CareServiceDTO[]>;
  isEmptyListTransit = false;
  isEmptyListTransport = false;
  isEmptyListCare = false;

  constructor(private authService: AuthService, private prestacionService: PrestacionService, private router: Router) { }

  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));

    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
  }

  reloadData() {
    this.prestacionService.getAllCareServicesByIdUser(this.userDTO.Id).subscribe(data => this.careServices = data, error => this.isEmptyListCare = true);
    this.prestacionService.getAllTransitServicesByIdUser(this.userDTO.Id).subscribe(data => this.transitServices = data, error => this.isEmptyListTransit = true);
    this.prestacionService.getAllTransportServicesByIdUser(this.userDTO.Id).subscribe(data => this.transportServices = data, error => this.isEmptyListTransport = true);
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      this.userDTO = data;
      this.prestacionService.getAllCareServicesByIdUser(this.userDTO.Id).subscribe(data => this.careServices = data, error => this.isEmptyListCare = true);
      this.prestacionService.getAllTransitServicesByIdUser(this.userDTO.Id).subscribe(data => this.transitServices = data, error => this.isEmptyListTransit = true);
      this.prestacionService.getAllTransportServicesByIdUser(this.userDTO.Id).subscribe(data => this.transportServices = data, error => this.isEmptyListTransport = true);
    })
  }

  deleteTransitService(id: number) {

    console.log('Id del servicio: ', id);
    this.prestacionService.deleteTransitServiceById(id)
      .subscribe(
        data => {
          console.log('data: ', data);
          this.reloadData();
        },
        error => console.log('error: ', error));
  }

  deleteTransportService(idTransport: number) {
    this.prestacionService.deleteTransportServiceById(idTransport)
      .subscribe(
        data => {
          console.log('data: ', data);
          this.reloadData();
        },
        error => console.log('error: ', error));
  }

  deleteCareService(idCare: number) {
    this.prestacionService.deleteCareServiceById(idCare)
      .subscribe(
        data => {
          console.log('data: ', data);
          this.reloadData();
        },
        error => console.log('error: ', error));
  }

  redirectEditService(id: number, type: TypeService) {
    this.router.navigate(['updateService', id, type]);
  }
}
