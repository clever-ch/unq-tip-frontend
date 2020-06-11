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

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO;
  transitServices: Observable<TransitServiceDTO[]>;
  transportServices: Observable<TransportServiceDTO[]>;
  careServices: Observable<CareServiceDTO[]>;

  constructor(private prestacionService: PrestacionService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.prestacionService.getAllCareServices().subscribe(data => this.careServices = data);
    this.prestacionService.getAllTransitServices().subscribe(data => this.transitServices = data);
    this.prestacionService.getAllTransportServices().subscribe(data => this.transportServices = data);
  }
}
