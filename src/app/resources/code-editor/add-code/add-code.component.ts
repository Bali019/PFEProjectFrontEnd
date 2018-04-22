import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from "mydatepicker";
import {CodeService} from "../../../../services/resourcesServices/code.service";
import {Resource} from "../../../models/resource";
import {error} from "util";
import {ImageService} from "../../../../services/resourcesServices/image.service";

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {
selectedLanguage : any = { "id": "1", "name": "java" }
code
  description;
  startDate  ;
  endDate;
  active : boolean = false;
  codeName;
  d : Date
  codeEditor : any = {}
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  constructor( private codeService : ImageService) {
    this.codeEditor = new Resource
    this.d = new Date()
    //  console.log(thi)
    this.startDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
    this.endDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
  }

  ngOnInit() {
  }
  onSaveCode(){
    this.codeEditor.resourceName = this.codeName;
    this.codeEditor.description = this.description;
    this.codeEditor.startDate =this.startDate.date.year+"-"+this.startDate.date.month+"-"+this.startDate.date.day;
    this.codeEditor.endDate = this.endDate.date.year+"-"+this.endDate.date.month+"-"+this.endDate.date.day;
    this.codeEditor.active = this.active;
    this.codeEditor.contentType = "code/"+this.selectedLanguage.name;
    this.codeEditor.code = this.code;
    this.codeEditor.type_res = "code";
    console.log(this.codeEditor.code)
    this.codeService.saveCode(this.codeEditor).subscribe(resp => {
      console.log(resp),
      error => {
        console.log(error)
      }
    })
  }



  languages : any[] =
    [{ "name": "java" }, {"name": "cobol" }, { "name": "javascript" }, { "name": "c" },
      {"name": "php" }, { "name": "html" }, { "name": "css" }, {"name": "c++" }
      , { "name": "sql" }];
}
