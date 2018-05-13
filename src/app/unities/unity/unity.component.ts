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
import {Unity} from "../../models/Unity";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UnityComponent implements OnInit {
  @Input() test: Unity
  idTest
  idFormation
  unity: any = {};
  dataLoaded: any = 0;
  orderU: number;

  constructor(private route: ActivatedRoute, public unityService: UnityService,
              private router: Router, private loc: Location,
              private resourceService: ImageService) {

    this.idTest = this.route.snapshot.paramMap.get('idU');
  }

  ngOnInit() {
    let url = this.router.url;
    console.log(url)
    if (this.idTest != null) {
      this.unityService.getUnity(this.idTest).subscribe(resp => {
        this.unity = resp;

      }, error2 => {
        console.log("not found bali")
      });
      if (this.unity != null) {
        this.dataLoaded = 1;
      }
    } else {
      this.unity = this.test;
      if (this.unity != null) {
        this.dataLoaded = 1;
      }
    }

  }

  onUpdate() {
    if (this.idTest != null) {
      this.unityService.getUnity(this.idTest).subscribe(resp => {
        this.unity = resp;

      }, error2 => {
        console.log("not found bali")
      });
    } else {
      this.unityService.getUnity(this.unity['unityId']).subscribe(resp => {
        this.unity = resp;

      }, error2 => {
        console.log("not found bali")
      });
    }
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
          this.onUpdate()
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

  tops() {
    window.scrollTo(0, 0);
  }
}
