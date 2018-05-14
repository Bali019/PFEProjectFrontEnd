import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../../services/resourcesServices/image.service";
import {User} from "../../../models/user";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";
import swal from 'sweetalert2';
import {UnityComponent} from "../../../unities/unity/unity.component";
import {AddUnityComponent} from "../../../unities/add-unity/add-unity.component";
import {UpdateUnityComponent} from "../../../unities/update-unity/update-unity.component";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
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

  constructor(private fileService: ImageService,private u : UpdateUnityComponent) {
    this.d = new Date()
    //  console.log(thi)
    this.startDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
    this.endDate = { date: { year: this.d.getFullYear(), month: this.d.getMonth(), day: this.d.getDay() } };
  }

  ngOnInit() {
  }

  onUpload() {

    let x = ({"image": {"description": "X20"}})
    const blobX = new Blob([JSON.stringify(x)], {});
    var fd: FormData = new FormData();
    fd.append('file', this.file);
    fd.append('startDate',this.startDate.date.year+"-"+this.startDate.date.month+"-"+this.startDate.date.day)
    console.log(this.startDate.date.year)
    fd.append('endDate',this.endDate.date.year+"-"+this.endDate.date.month+"-"+this.endDate.date.day)
    //  fd.append('endDate',this.endDate.getDate())
    fd.append('description',this.description);
    fd.append("active",this.active.toString());
    fd.append('fileName',this.imageName);
    // fd.append('startDate',new Date())


    this.fileService.saveFile(fd).subscribe(res => {
      this.fd = res ;
    });
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
  onAddFile() {
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
        fd.append('fileName',this.imageName);


        this.fileService.saveFile(fd).subscribe(res => {
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

}

