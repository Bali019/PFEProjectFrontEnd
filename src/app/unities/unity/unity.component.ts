import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {  ActivatedRoute,Router} from "@angular/router";
import {Location} from '@angular/common';
import {UnityService} from "../unity.service";
import {ImageService} from "../../../services/resourcesServices/image.service";
import {Unity} from "../../models/Unity";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UnityComponent implements OnInit {
  @Input() test: Unity
  idTest
  idFormation
  unity: any = {};
  dataLoaded: any = 0;
  orderU: number;

  constructor(private route: ActivatedRoute, public unityService: UnityService,
              private router: Router, private loc: Location,
              private resourceService: ImageService) {

    this.idTest = this.route.snapshot.paramMap.get('idU');
  }

  ngOnInit() {

      this.unity = this.test;
      if (this.unity != null) {
        this.dataLoaded = 1;
      }
  }


  tops() {
    window.scrollTo(0, 0);
  }
}
