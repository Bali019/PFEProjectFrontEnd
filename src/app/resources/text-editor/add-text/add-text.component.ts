import {Component, OnInit, ViewChild} from '@angular/core';
import {IMyDpOptions} from "mydatepicker";
import {TextService} from "../../../../services/resourcesServices/text.service";
import {Resource} from "../../../models/resource";
import {ImageService} from "../../../../services/resourcesServices/image.service";
import {TdTextEditorComponent} from "@covalent/text-editor";
import {CustomMarker} from "@ngui/map";
import {TdMarkdownComponent} from "@covalent/markdown";



@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {
  text
  active: boolean = false;
  textName;
  textEditor: any = {}

  options: any = {};



  constructor(private textService: ImageService) {
    this.textEditor = new Resource;
  }

  ngOnInit() {

  }

  onSaveText() {
    this.textEditor.resourceName = this.textName;
    this.textEditor.active = this.active;
    this.textEditor.text = this.text;
    this.textEditor.type_res = "text";
    this.textService.saveText(this.textEditor).subscribe(resp => {
      console.log(resp);
    })
  }

  onDateChanged() {
    console.log(" test test " + this.active)

  }


}
