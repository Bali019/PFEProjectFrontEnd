import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormationService} from "../formation.service";
import {IMyDpOptions} from "mydatepicker";
import swal from 'sweetalert2';
import {Formation} from "../../models/Formation";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AddFormationComponent implements OnInit {
  formation : any = {}
  startDate;
  endDate;
  d: Date
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  constructor(private formationService : FormationService, private router : Router) {
    this.formation = new Formation();
    this.d = new Date();
    this.startDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
    this.endDate = {date: {year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay()}};
  }

  ngOnInit() {
  }
  onClickNext() {
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
        this.formation.startDate = this.startDate.date.year + "-" + this.startDate.date.month + "-" + this.startDate.date.day;
        this.formation.endDate = this.endDate.date.year + "-" + this.endDate.date.month + "-" + this.endDate.date.day;
       this.formationService.saveFormation(this.formation).subscribe(res => {
       console.log(res)
         this.formation=res;
         this.saveAndGo(this.formation.formationId);

       });

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
  saveAndGo(f){

    window.scrollTo(0, 0);
    this.router.navigate(['/formation', f]);
  }
}
