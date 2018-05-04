import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {
  ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterState,
  RouterStateSnapshot
} from "@angular/router";
import {Location} from '@angular/common';
import {UnityService} from "../unity.service";
import {ImageService} from "../../../services/resourcesServices/image.service";
import swal from 'sweetalert2';
import {FormationService} from "../../formations/formation.service";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UnityComponent implements OnInit {
  @Input() test: any = {};
  idTest
  idFormation
  unity: any = {};
  dataLoaded: any = 0;
  orderU: number;

  constructor(private route: ActivatedRoute, public unityService: UnityService,
              private router: Router, private loc: Location,
              private resourceService: ImageService) {
    this.idTest = this.route.snapshot.paramMap.get('idU');

    console.log(this.idTest + " test unity id " + " l id de la formation =>" + this.idFormation)
    this.unityService.getUnity(this.idTest).subscribe(resp => {
      this.unity = resp;
      this.orderU = this.unity["orderU"];

    }, error2 => {
      console.log("not found bali")
    });


  }

  ngOnInit() {

    if (this.unity != null) {
      this.dataLoaded = 1;
    }


  }

  onNewUnity() {
    this.router.navigateByUrl('/add-unities');
  }

  onDeleteResource(id) {
    swal({
      title: 'Voulez-vous confirmer ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-success',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.resourceService.deleteResource(id).subscribe(res => {
          console.log(res)
          this.ngOnInit()
        })
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
      result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }

}
