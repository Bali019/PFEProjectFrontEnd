import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {MatDialog} from "@angular/material";
import {AddCodeComponent} from "../../resources/code-editor/add-code/add-code.component";
import {UnityService} from "../unity.service";
import {Unity} from "../../models/Unity";
import {FormationAccueilComponent} from "../../formations/formation-accueil/formation-accueil.component";
import {IMyDpOptions} from "mydatepicker";
import {Formation} from "../../models/Formation";
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-unity',
  templateUrl: './add-unity.component.html',
  styleUrls: ['./add-unity.component.css']
})
export class AddUnityComponent implements OnInit {
  unity:any = {}
  startDate;
  endDate;
  d: Date
  formation : any = {}
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  constructor(private  unityService : UnityService, private formationAccueilComponent : FormationAccueilComponent) {
    this.unity = new Unity();
    this.formation = new Formation();
    this.d = new Date();
    this.startDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
    this.endDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
  }
ngOnInit(){

}
onSaveUnity(){
  this.unity.startDate = this.startDate.date.year + "-" + this.startDate.date.month + "-" + this.startDate.date.day;
  this.unity.endDate = this.endDate.date.year + "-" + this.endDate.date.month + "-" + this.endDate.date.day;
  this.formation.formationId = localStorage.getItem('idFormation');

  this.unity.formation = this.formation;
  console.log(this.unity.formation.formationId+"ddddddddddddddddddddd")
  this.unityService.saveUnity(this.unity).subscribe(res => {
    this.unity= res
 this.formationAccueilComponent.ngOnInit()

  })
}
  onSaveUnitySwall() {
    swal({
      title: 'Voulez-vous enregistrer et continuer ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler',
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-success',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

this.onSaveUnity();
        swal(
          'Ajouté avec succès!',
          'success'
        )
      } else if (
        // Read more about handling dismissals
      result.dismiss === swal.DismissReason.cancel
      ) {/*
       swal(
       'Cancelled',
       'Your imaginary file is safe :)',
       'error'
       )*/
      }
    })
  }
}


