import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UnityService} from "../unity.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../models/user";
import {Unity} from "../../models/Unity";
import {FormationService} from "../../formations/formation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-unitiesList',
  templateUrl: './unitiesList.component.html',
  styleUrls: ['./unitiesList.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UnitiesListComponent implements OnInit {

  @Input() orderUnity: any = {}
  /*
   test: any = [{"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}, {"name": "a"}]
   */
  unities: any = []
  currentUnity: any = {}
  username: String
  idFormation: any;
  firstU: any = []
  idCurrentUnity: any
  nextActivation: any = 1
  previousActivation: any = 1
  nextU: any
  previousU: any

  constructor(private unityService: UnityService, private userService: UserService,
              private formationService: FormationService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {

    this.idFormation = this.formationService.getFormationId();
    this.idFormation = localStorage.getItem('idFormation');
    this.idCurrentUnity = this.route.snapshot.paramMap.get('idU');
    this.unityService.getFormationUnities(this.idFormation).subscribe(data2 => {
      this.unities = data2;
      let i = 0;
      for (let u of this.unities) {
        this.firstU[u.orderU] = u.unityId
        i++;
      }
      if (this.firstU.indexOf(+this.idCurrentUnity) >= i) {
        this.nextActivation = 0;
      } else {
        this.nextU = this.firstU[this.firstU.indexOf(+this.idCurrentUnity) + 1];
      }
      if (this.firstU.indexOf(+this.idCurrentUnity) == 1) {
        this.previousActivation = 0;
      } else {
        this.previousU = this.firstU[this.firstU.indexOf(+this.idCurrentUnity) - 1]
      }
      console.log("===>" + this.firstU.indexOf(+this.idCurrentUnity));
    })

  }

  btnClick  () {
    this.router.navigateByUrl(`/formation/`+this.idFormation+`/unities/`+this.nextU);
  }
}
