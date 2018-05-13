import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormationService} from "../formation.service";
import {IMyDpOptions} from "mydatepicker";
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AddFormationComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };
  constructor() {
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
      if (result.value) {/*
       this.resourceService.deleteResource(id).subscribe(res => {
       console.log(res)
       this.onUpdate()
       })
       swal(
       'Deleted!',
       'Your file has been deleted.',
       'success'
       )
       */} else if (
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
