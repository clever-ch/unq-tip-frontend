import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { PublicationService } from "src/app/services/publication-service/publication.service";
import { PublicationDTO } from "src/app/model/publication-dto";

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  publications: Observable<PublicationDTO[]>;

  constructor(private publicationService: PublicationService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.publications = this.publicationService.getPublicationList();
  }

}
