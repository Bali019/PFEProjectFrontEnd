import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {MatDialog} from "@angular/material";
import {AddCodeComponent} from "../../resources/code-editor/add-code/add-code.component";
@Component({
  selector: 'app-add-unity',
  templateUrl: './add-unity.component.html',
  styleUrls: ['./add-unity.component.css']
})
export class AddUnityComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddCodeComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


