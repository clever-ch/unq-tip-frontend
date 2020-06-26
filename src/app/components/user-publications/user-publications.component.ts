import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PublicationService } from "src/app/services/publication-service/publication.service";
import { PublicationDTO } from "src/app/model/publication-dto";
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
  isEmptyListLost = false;
  isEmptyListFound = false;

  constructor(private publicationService: PublicationService, private authService: AuthService) { }

  ngOnInit() {
    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      this.userDTO = data;
      this.publicationService.getAllPublicationsLostByIdUser(this.userDTO.Id).subscribe(data => this.publicationsLost = data, error => this.isEmptyListLost = true);
      this.publicationService.getAllPublicationsFoundByIdUser(this.userDTO.Id).subscribe(data => this.publicationsFound = data, error => this.isEmptyListFound = true);
      });
  }
}
