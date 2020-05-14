import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/model/loginDTO';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserDTO } from 'src/app/model/userDTO';
import { Observable } from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    //this.userDTO = this.route.snapshot.params['guid'];

    this.loginDTO = JSON.parse(localStorage.getItem("loginDTO"));
    this.GetUserLoggedInByGuid(this.loginDTO.UserGuid);
    this.ValidateUserLoggedIn(this.loginDTO);
  }

  private GetUserLoggedInByGuid(userGuid: string) {
    this.authService.getUserByGuid(userGuid).subscribe(data => {
      console.log(data)
      this.userDTO = data;
    }, error => console.log(error));
  }

  logout() {
    localStorage.removeItem("loginDTO");
    this.router.navigate(['publications']);
  }

  private ValidateUserLoggedIn(loginDTO: LoginDTO) {
    try {
      this.authService.loggedInUserExists(loginDTO);
    } catch (error) {
      console.log(error);
      this.router.navigate(['publications']);
    }
  }

  redirectMyPublications() {
    this.router.navigate(['publications']);
  }

  redirectMyServices() {
    this.router.navigate(['publications']);
  }

}
