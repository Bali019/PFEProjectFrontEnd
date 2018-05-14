import {Component, Input, OnInit} from '@angular/core';
import {IMyDpOptions} from "mydatepicker";
import {CodeService} from "../../../../services/resourcesServices/code.service";
import {Resource} from "../../../models/resource";
import {error} from "util";
import {ImageService} from "../../../../services/resourcesServices/image.service";
import swal from 'sweetalert2';
import {UnityComponent} from "../../../unities/unity/unity.component";
import {Unity} from "../../../models/Unity";
import {AddUnityComponent} from "../../../unities/add-unity/add-unity.component";
import {UpdateUnityComponent} from "../../../unities/update-unity/update-unity.component";
@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {
  @Input() unityId: any;
  @Input() codeEditor: any = {}
  unity: any = {}
  selectedLanguage: any = {"id": "1", "name": "java"}
  code
  description;
  startDate;
  endDate;
  active: boolean = false;
  codeName;
  d: Date
  updateMode: any = 0;
  resourceId;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private codeService: ImageService, private u: UpdateUnityComponent) {
    this.unity = new Unity();
    this.codeEditor = new Resource
    this.d = new Date()
    this.startDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
    this.endDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
  }

  ngOnInit() {
    this.codeName = this.codeEditor["resourceName"];
    this.description = this.codeEditor["description"];
    this.active = this.codeEditor["active"];
    this.selectedLanguage.name = this.codeEditor["contentType"];
    this.code = this.codeEditor["code"];
    this.resourceId = this.codeEditor["resourceId"]
    if (this.resourceId != null){
      this.updateMode = 1 ;
    }
  }

  onAddCode() {
    swal({
      title: 'Voulez-vous confirmer ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ajouter',
      cancelButtonText: 'Annuler',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.codeEditor.resourceName = this.codeName;
        this.codeEditor.description = this.description;
        this.codeEditor.startDate = this.startDate.date.year + "-" + this.startDate.date.month + "-" + this.startDate.date.day;
        this.codeEditor.endDate = this.endDate.date.year + "-" + this.endDate.date.month + "-" + this.endDate.date.day;
        this.codeEditor.active = this.active;
        this.codeEditor.contentType = this.selectedLanguage.name;
        this.codeEditor.code = this.code;
        this.codeEditor.type_res = "code";
        this.unity.unityId = this.unityId
        this.codeEditor.unity = this.unity;
        console.log(this.codeEditor.code)
        this.codeService.saveCode(this.codeEditor).subscribe(resp => {
          this.u.ngOnInit();
          console.log(resp),
            error => {
              console.log(error)
            }
        })

        swal(
          'Ajouter!',
          'Votre resource est ajouté avec succès',
          'success'
        )
      } else if (
        // Read more about handling dismissals
      result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Annuler',
          '',
          'error'
        )
      }
    })


  }


  languages: any[] =
    [{"name": "java"}, {"name": "cobol"}, {"name": "javascript"}, {"name": "c"},
      {"name": "php"}, {"name": "html"}, {"name": "css"}, {"name": "c++"}
      , {"name": "sql"}];

  onUpdateCode() {
    swal({
      title: 'Voulez-vous confirmer ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ajouter',
      cancelButtonText: 'Annuler',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.codeEditor.resourceName = this.codeName;
        this.codeEditor.description = this.description;
        this.codeEditor.startDate = this.startDate.date.year + "-" + this.startDate.date.month + "-" + this.startDate.date.day;
        this.codeEditor.endDate = this.endDate.date.year + "-" + this.endDate.date.month + "-" + this.endDate.date.day;
        this.codeEditor.active = this.active;
        this.codeEditor.contentType = this.selectedLanguage.name;
        this.codeEditor.code = this.code;
        this.codeEditor.type_res = "code";
        this.unity.unityId = this.unityId
        this.codeEditor.unity = this.unity;
        console.log(this.codeEditor.code)
        this.codeService.updateResource(this.codeEditor).subscribe(resp => {
          this.u.ngOnInit();
          console.log(resp),
            error => {
              console.log(error)
            }
        })

        swal(
          'Ajouter!',
          'Votre resource est ajouté avec succès',
          'success'
        )
      } else if (
        // Read more about handling dismissals
      result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Annuler',
          '',
          'error'
        )
      }
    })


  }

  onSaveCode() {
    this.codeEditor.resourceName = this.codeName;
    this.codeEditor.description = this.description;
    this.codeEditor.startDate = this.startDate.date.year + "-" + this.startDate.date.month + "-" + this.startDate.date.day;
    this.codeEditor.endDate = this.endDate.date.year + "-" + this.endDate.date.month + "-" + this.endDate.date.day;
    this.codeEditor.active = this.active;
    this.codeEditor.contentType = this.selectedLanguage.name;
    this.codeEditor.code = this.code;
    this.codeEditor.type_res = "code";
    this.unity.unityId = this.unityId
    this.codeEditor.unity = this.unity;
    console.log(this.codeEditor.code)
    this.codeService.saveCode(this.codeEditor).subscribe(resp => {
      console.log(resp),
        error => {
          console.log(error)
        }
    })
  }
}
