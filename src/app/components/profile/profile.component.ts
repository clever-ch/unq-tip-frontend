import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDTO: UserDTO;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    //this.userDTO = this.route.snapshot.params['guid'];

    this.userDTO = JSON.parse(localStorage.getItem("userDTO"));
  }

  logout() {
    localStorage.removeItem("userDTO");
    this.router.navigate(['publications']);
  }

}
