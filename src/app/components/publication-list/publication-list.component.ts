import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { PublicationService } from "src/app/services/publication-service/publication.service";
import { PublicationDTO } from "src/app/model/publication-dto";
import { DialogPublicationComponent } from '../dialog-publication/dialog-publication.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  publications: Observable<PublicationDTO[]>;

  constructor(private publicationService: PublicationService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.publications = this.publicationService.getPublicationList();
  }

  animal: string;

  openDialog(publicationDTO: PublicationDTO): void {
    const dialogRef = this.dialog.open(DialogPublicationComponent, {
      width: '700',
      data: publicationDTO
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}
