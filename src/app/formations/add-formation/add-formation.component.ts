import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormationService} from "../formation.service";

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AddFormationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
