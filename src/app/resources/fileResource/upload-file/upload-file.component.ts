import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../../../services/resourcesServices/image.service";
import {User} from "../../../models/user";
import {IMyDateModel, IMyDpOptions} from "mydatepicker";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
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

  constructor(private fileService: ImageService) {
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

}

