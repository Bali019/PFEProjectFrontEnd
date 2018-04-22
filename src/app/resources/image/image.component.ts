import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../../services/resourcesServices/image.service";
import {log} from "util";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
image : any ={} ;
  constructor(private imgService : ImageService) { }

  ngOnInit() {
    this.imgService.getImage(2).subscribe(data =>{
      this.image=data;
    },error2 => {
      console.log("errrrrrreuuur !")
    })
  }

}
