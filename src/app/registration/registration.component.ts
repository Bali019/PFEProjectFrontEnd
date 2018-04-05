import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /**this.showNotification();*/
  }
  /**showNotification(){
    var type = ['','info','success','warning','danger'];

    var color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "ti-gift",
      message: "<div style='text-align: center'>Welcome to <b>Sopra E-Learning<b></b></div> <br>Create your account" +
      "<div> <input type='text'></div>"
    },{
      type: 'info',
      timer: null,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  }**/
}
