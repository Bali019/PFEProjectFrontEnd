import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-afficher-code',
  templateUrl: './afficher-code.component.html',
  styleUrls: ['./afficher-code.component.css']
})
export class AfficherCodeComponent implements OnInit {
@Input() code : any = {}
  constructor() { }

  ngOnInit() {
  }

}
