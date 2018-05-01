import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {
  ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterState,
  RouterStateSnapshot
} from "@angular/router";
import {Location} from '@angular/common';
import {Observable} from "rxjs/Observable";
import {UnityService} from "../unity.service";
import {ImageService} from "../../../services/resourcesServices/image.service";
import swal from 'sweetalert2';
import {AddCodeComponent} from "../../resources/code-editor/add-code/add-code.component";

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {
  unity: any = {};
  idTest: string;

  constructor(private route: ActivatedRoute, public unityService: UnityService,
              private router: Router, private loc: Location,
              private resourceService: ImageService) {
  }

  ngOnInit() {

    /*    this.authService.getUnitys()
     .subscribe(data=>{
     this.unities = data;
     }, error2 => {
     this.authService.logout();
     this.router.navigateByUrl('/login');
     })*/
    this.idTest = this.route.snapshot.paramMap.get('id');
    this.unityService.getUnity(this.idTest).subscribe(resp => {
      this.unity = resp
    }, error2 => {
      console.log("not found bali")
    });

    console.log(this.idTest)
    /*this.unityService.getUnity(3).subscribe(resp => {
     this.unity=resp
     }, error2 => {console.log("not found bali")})*/


  }

  onNewUnity() {
    this.router.navigateByUrl('/add-unities');
  }
  onDeleteResource(id){
    swal({

      target: 'app-add-code',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
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
