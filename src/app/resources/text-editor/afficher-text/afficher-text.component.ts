import {Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {TdTextEditorComponent} from "@covalent/text-editor";
import {TextService} from "../../../../services/resourcesServices/text.service";
import {Resource} from "../../../models/resource";

@Component({
  selector: 'app-afficher-text',
  templateUrl: './afficher-text.component.html',
  styleUrls: ['./afficher-text.component.css']
})
export class AfficherTextComponent implements OnInit {
  @Input() textX : any = {}
  text : any
  bali019
  active : boolean = false;
  textName;
  textEditor: any ={}
  test : any = {};


  constructor(private textService : TextService) {
    this.textEditor = new Resource();
  }

  ngOnInit() {/*
console.log(this.id + "test component")
this.textService.getText(this.id).subscribe(data=>{
  this.textEditor = data;
  console.log(data.text+ "hello hello !")
  this.bali019=data.text
  console.log(this.bali019+ "hello 2 hello 2!")
},error2 => {
  console.log("errrrrrreuuur !")
})
   // this.text=this.textEditor.text;this.test.text=
console.log(this.text+ "hello hello !")*/
    this.bali019=this.textX.text

  }


}
