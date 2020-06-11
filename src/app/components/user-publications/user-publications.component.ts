import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PublicationService } from "src/app/services/publication-service/publication.service";
import { PublicationDTO } from "src/app/model/publication-dto";
import { DialogPublicationComponent } from '../dialog-publication/dialog-publication.component';
import { MatDialog } from '@angular/material';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LoginDTO } from 'src/app/model/loginDTO';
import { UserDTO } from 'src/app/model/userDTO';


@Component({
  selector: 'app-user-publications',
  templateUrl: './user-publications.component.html',
  styleUrls: ['./user-publications.component.css']
})
export class UserPublicationsComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO;
  publicationsLost: Observable<PublicationDTO[]>;
  publicationsFound: Observable<PublicationDTO[]>;
  images = [];
  searchText;

  constructor(private publicationService: PublicationService, public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
  }

  openDialog(publicationDTO: PublicationDTO): void {
    this.dialog.open(DialogPublicationComponent, {
      width: '700',
      data: publicationDTO
    });
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      this.userDTO = data;
      this.publicationsLost = this.publicationService.getAllPublicationsLostByIdUser(this.userDTO.Id);
      this.publicationsFound = this.publicationService.getAllPublicationsFoundByIdUser(this.userDTO.Id);
    })
  }
}
