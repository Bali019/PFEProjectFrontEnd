import { Component, OnInit } from '@angular/core';
import {FormationService} from "../formation.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-formations-liste',
  templateUrl: './formations-liste.component.html',
  styleUrls: ['./formations-liste.component.css']
})
export class FormationsListeComponent implements OnInit {
  formations: any = []
  currentUser: any = {}
  username: String
  constructor(private formationService : FormationService, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
      this.username = this.currentUser["username"];
      this.formationService.getFormationsCreatedByConnected(this.username).subscribe(data2 => {
        this.formations = data2;
      })
    })
  }

}
