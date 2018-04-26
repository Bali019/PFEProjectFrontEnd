import {Component, OnInit} from '@angular/core';
import {UnityService} from "../unity.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../models/user";
import {Unity} from "../../models/Unity";

@Component({
  selector: 'app-unitiesList',
  templateUrl: './unitiesList.component.html',
  styleUrls: ['./unitiesList.component.css']
})
export class UnitiesListComponent implements OnInit {
/*
  test: any = [{"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}]
*/
  unities: any = []
  currentUser: any = {}
  username: String

  constructor(private unityService: UnityService, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
      this.username = this.currentUser["username"];
      this.unityService.getUnitiesCreatedByConnected(this.username).subscribe(data2 => {
        this.unities = data2;
      })
    })
  }
}
