import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/constants/type-service.enum';
import { Router } from '@angular/router';
import { PrestacionService } from 'src/app/services/prestacion-service/prestacion.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidOfTime } from 'src/app/constants/unid-of-time.enum';
import { CareServiceDTO } from 'src/app/model/careServiceDTO';
import { TransitServiceDTO } from 'src/app/model/transitServiceDTO';
import { TransportServiceDTO } from 'src/app/model/transportServiceDTO';
import { PrestacionDTO } from 'src/app/model/prestacionDTO';
import { LoginDTO } from 'src/app/model/loginDTO';
import { UserDTO } from 'src/app/model/userDTO';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO;
  service: PrestacionDTO = new PrestacionDTO();   //Mientras no se conozca el tipo del servicio se guarda todo en este DTO
  submitted = false;
  createSuccess = false;
  failCreate = false

  careService: CareServiceDTO = new CareServiceDTO();
  transitService: TransitServiceDTO = new TransitServiceDTO();
  transportService: TransportServiceDTO = new TransportServiceDTO();

  createServiceFG: FormGroup;
  serviceTypes = [TypeService.Care, TypeService.Transit, TypeService.Transport];
  unidTime = [UnidOfTime.HOURS, UnidOfTime.DAYS, UnidOfTime.WEEKS, UnidOfTime.MONTHS, UnidOfTime.YEARS];

  constructor(private router: Router, private prestacionService: PrestacionService, private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);

    this.createServiceFG = this.formBuilder.group({
      typeServiceFCN: ['', Validators.required],
      descriptionFCN: ['', [Validators.required, Validators.minLength(50)]],
      unidTimeFCN: ['', Validators.required],
      timeServiceFCN: ['', [Validators.required, Validators.max(31)]]
    });
  }

  get controls() { return this.createServiceFG.controls; }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      this.userDTO = data;
    })
  }

  createService() {
    this.submitted = true;
    if (this.service.TypeService === TypeService.Care) {

      this.careService.TypeService = this.service.TypeService;
      this.careService.UnidOfTime = this.service.UnidOfTime;
      this.careService.CareTime = this.service.Time;
      this.careService.ServiceDescription = this.service.ServiceDescription;
      this.careService.UserDTO = this.userDTO;

      this.prestacionService.createCareService(this.careService).
        subscribe(data => (this.failCreate = false, this.createSuccess = true), 
        error => this.failCreate = true);
    }

    if (this.service.TypeService === TypeService.Transit) {

      this.transitService.TypeService = this.service.TypeService;
      this.transitService.UnidOfTime = this.service.UnidOfTime;
      this.transitService.TransitTime = this.service.Time;
      this.transitService.ServiceDescription = this.service.ServiceDescription;
      this.transitService.UserDTO = this.userDTO;

      this.prestacionService.createTransitService(this.transitService).
        subscribe(data => (this.failCreate = false, this.createSuccess = true), 
        error => this.failCreate = true);

    }

    if (this.service.TypeService === TypeService.Transport) {

      this.transportService.TypeService = this.service.TypeService;
      this.transportService.UnidOfTime = this.service.UnidOfTime;
      this.transportService.ScheduleAvailable = this.service.Time;
      this.transportService.ServiceDescription = this.service.ServiceDescription;
      this.transportService.UserDTO = this.userDTO;

      this.prestacionService.createTransportService(this.transportService).
        subscribe(data => (this.failCreate = false, this.createSuccess = true), 
        error => this.failCreate = true);
    }

    if(this.service.TypeService === undefined){
      this.failCreate = true;
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
