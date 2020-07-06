import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/constants/type-service.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestacionService } from 'src/app/services/prestacion-service/prestacion.service';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidOfTime } from 'src/app/constants/unid-of-time.enum';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  id: number;
  typeService: TypeService;
  service: Observable<any>;
  editService: FormGroup;
  submitted = false;
  failEdit = false;
  editSuccess = false;
  showTransitTime = true;
  showScheduleAvailable = true;
  showCareTime = true
  valueDefault: Number = 0;
  unidTime = [UnidOfTime.HOURS, UnidOfTime.DAYS, UnidOfTime.WEEKS, UnidOfTime.MONTHS, UnidOfTime.YEARS];


constructor(private route: ActivatedRoute, private router: Router, private prestacionServ: PrestacionService,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.typeService = this.route.snapshot.params['type'];

    if(this.typeService === TypeService.Transit) {

      this.prestacionServ.getTransitServiceByIdAndTypeService(this.id)
      .subscribe(data => {
        console.log(data);
        this.service = data;
        this.showScheduleAvailable = false;
        this.showCareTime = false;
      }, error => console.log(error));

    } else if(this.typeService === TypeService.Transport) {

              this.prestacionServ.getTransportServiceByIdAndTypeService(this.id)
              .subscribe(data => {
              console.log(data);
              this.service = data;
              this.showTransitTime = false;
              this.showCareTime = false;
              }, error => console.log(error));

      } else if(this.typeService === TypeService.Care) {

                      this.prestacionServ.getCareServiceByIdAndTypeService(this.id)
                      .subscribe(data => {
                      console.log(data);
                      this.service = data;
                      this.showTransitTime = false;
                      this.showScheduleAvailable = false;
                      }, error => console.log(error));
      }

      this.editService = this.formBuilder.group({
        type: ['', Validators.required],
        desc: ['', [Validators.required, Validators.minLength(50)]],
        unidTime: ['', Validators.required],
        timeTransit: ['', [Validators.required, Validators.max(31)]],
        timeCare: ['', [Validators.required, Validators.max(31)]],
        timeTransport: ['', [Validators.required, Validators.max(31)]]
    });
    }

    get f() { return this.editService.controls; }

    gotoMyServices(){
      this.router.navigate(['/userServices']);
    }

    onSubmit() {
      this.submitted = true;
      this.updateProfile();
    }

    updateProfile(){

      if(this.typeService === TypeService.Transit) {

        this.prestacionServ.updateTransitService(this.service).subscribe(data => (this.failEdit = false, this.editSuccess = true), 
        error => this.failEdit = true);
  
      } else if(this.typeService === TypeService.Transport) {

                this.prestacionServ.updateTransportService(this.service).subscribe(data => (this.failEdit = false, this.editSuccess = true), 
                error => this.failEdit = true);
  
        } else if(this.typeService === TypeService.Care) {
  
                      this.prestacionServ.updateCareService(this.service).subscribe(data => (this.failEdit = false, this.editSuccess = true), 
                      error => this.failEdit = true);
        }
      
    }
}
