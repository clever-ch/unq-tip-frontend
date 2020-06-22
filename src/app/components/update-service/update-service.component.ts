import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/constants/type-service.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestacionService } from 'src/app/services/prestacion-service/prestacion.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  id: number;
  typeService: TypeService;
  service: Observable<any>;


  constructor(private route: ActivatedRoute, private router: Router, private prestacionServ: PrestacionService) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.typeService = this.route.snapshot.params['type'];
    
    console.log("estoy aca");
    this.prestacionServ.getServiceByIdAndTypeService(this.typeService, this.id)
      .subscribe(data => {
        console.log(data);
        this.service = data;
      }, error => console.log(error));
  }

}
