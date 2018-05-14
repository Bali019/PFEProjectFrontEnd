import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IMyDpOptions} from "mydatepicker";
import {TextService} from "../../../../services/resourcesServices/text.service";
import {Resource} from "../../../models/resource";
import {ImageService} from "../../../../services/resourcesServices/image.service";
import {TdTextEditorComponent} from "@covalent/text-editor";
import {CustomMarker} from "@ngui/map";
import {TdMarkdownComponent} from "@covalent/markdown";

import swal from 'sweetalert2';
import {Unity} from "../../../models/Unity";
import {UnityComponent} from "../../../unities/unity/unity.component";
import {AddUnityComponent} from "../../../unities/add-unity/add-unity.component";
import {UpdateUnityComponent} from "../../../unities/update-unity/update-unity.component";


@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {
  @Input() unityId : any;
  @Input() textEditor : any = {}
  unity : any = {}
  text
  active: boolean = false;
  textName;
  options: any = {};
  resourceId;
  updateMode : any = 0;



  constructor(private textService: ImageService,private u : UpdateUnityComponent) {
    this.unity = new Unity();
   // this.textEditor = new Resource;

  }

  ngOnInit() {
    this.textName = this.textEditor["resourceName"];
    this.active = this.textEditor["active"];
    this.text = this.textEditor["text"];
    this.resourceId = this.textEditor["resourceId"]
    if (this.resourceId != null){
      this.updateMode = 1 ;
    }
  }



  onDateChanged() {
    console.log(" test test " + this.active)

  }
  onAddText(){
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
        this.textEditor.resourceName = this.textName;
        this.textEditor.active = this.active;
        this.textEditor.text = this.text;
        this.textEditor.type_res = "text";
        this.unity.unityId = this.unityId
        this.textEditor.unity = this.unity ;
        this.textService.saveText(this.textEditor).subscribe(resp => {
          this.u.ngOnInit();
          console.log(resp);
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
  onUpdateText(){
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
        this.textEditor.resourceName = this.textName;
        this.textEditor.active = this.active;
        this.textEditor.text = this.text;
        this.textEditor.type_res = "text";
        this.unity.unityId = this.unityId
        this.textEditor.unity = this.unity ;
        this.textService.updateResource(this.textEditor).subscribe(resp => {
          this.u.ngOnInit();
          console.log(resp);
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
  onSaveText() {
    this.textEditor.resourceName = this.textName;
    this.textEditor.active = this.active;
    this.textEditor.text = this.text;
    this.textEditor.type_res = "text";

    this.unity.unityId = this.unityId
    this.textEditor.unity = this.unity ;
    this.textService.saveText(this.textEditor).subscribe(resp => {
      console.log(resp);
    })
  }

}
