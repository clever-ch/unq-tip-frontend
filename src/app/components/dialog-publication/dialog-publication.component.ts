import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PublicationDTO } from "src/app/model/publication-dto";

@Component({
  selector: 'app-dialog-publication',
  templateUrl: './dialog-publication.component.html',
  styleUrls: ['./dialog-publication.component.css']
})
export class DialogPublicationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PublicationDTO) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}