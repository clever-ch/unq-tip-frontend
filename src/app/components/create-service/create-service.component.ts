import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/constants/type-service.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestacionService } from 'src/app/services/prestacion-service/prestacion.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidOfTime } from 'src/app/constants/unid-of-time.enum';
import { CareServiceDTO } from 'src/app/model/careServiceDTO';
import { TransitServiceDTO } from 'src/app/model/transitServiceDTO';
import { TransportServiceDTO } from 'src/app/model/transportServiceDTO';
import { PrestacionDTO } from 'src/app/model/prestacionDTO';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  service: PrestacionDTO;   //Mientras no se conozca el tipo del servicio se guarda todo en este DTO

  careService: CareServiceDTO;
  transitService: TransitServiceDTO;
  transportService: TransportServiceDTO;

  createServiceFG: FormGroup;
  serviceTypes = [TypeService.Care, TypeService.Transit, TypeService.Transport];
  unidTime = [UnidOfTime.HOURS, UnidOfTime.DAYS, UnidOfTime.WEEKS, UnidOfTime.MONTHS, UnidOfTime.YEARS];

  constructor(private route: ActivatedRoute, private router: Router, private prestacionService: PrestacionService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createService() {

    //Dependiendo el tipo que elijan se usa un método
    this.prestacionService.createCareService(this.careService);
    this.prestacionService.createTransitService(this.transitService);
    this.prestacionService.createTransportService(this.transportService);

  }
}
