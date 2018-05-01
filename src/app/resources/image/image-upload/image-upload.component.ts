import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../../services/resourcesServices/image.service";
import {User} from "../../../models/user";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import {UnityComponent} from "../../../unities/unity/unity.component";
import swal from 'sweetalert2';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @Input() unityId : any;
  image: any = {};
  file;
  fd: any;
  description;
  startDate  ;
  endDate;
  active : boolean = false;
  imageName;
  d : Date
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  // Initialized to specific date (09.10.2018).
  //public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private imgService: ImageService,private u : UnityComponent) {
    this.d = new Date()
  //  console.log(thi)
    this.startDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
    this.endDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
  }

  ngOnInit() {
  }



  onFilePicked(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if (event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
      console.log(this.file.toString())
    }
  }

  onDateChanged() {
    console.log( " test test " + this.active)

  }
  onAddImage() {
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
        var fd: FormData = new FormData();
        fd.append('unityId',this.unityId)
        fd.append('file', this.file);
        fd.append('startDate',this.startDate.date.year+"-"+this.startDate.date.month+"-"+this.startDate.date.day)
        console.log(this.startDate.date.year)
        fd.append('endDate',this.endDate.date.year+"-"+this.endDate.date.month+"-"+this.endDate.date.day)
        fd.append('description',this.description);
        fd.append("active",'1');
        fd.append('imageName',this.imageName);


        this.imgService.saveImage(fd).subscribe(res => {
          this.u.ngOnInit();
          console.log(res)
        });

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

  onUpload() {

    var fd: FormData = new FormData();
    fd.append('unityId',this.unityId)
    fd.append('file', this.file);
    fd.append('startDate',this.startDate.date.year+"-"+this.startDate.date.month+"-"+this.startDate.date.day)
    console.log(this.startDate.date.year)
    fd.append('endDate',this.endDate.date.year+"-"+this.endDate.date.month+"-"+this.endDate.date.day)
    fd.append('description',this.description);
    fd.append("active",'1');
    fd.append('imageName',this.imageName);


    this.imgService.saveImage(fd).subscribe(res => {
      console.log(res)
    });
  }
}
