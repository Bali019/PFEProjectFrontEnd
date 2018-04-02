import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClickOutsideModule} from "ng-click-outside";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnityComponent } from './unity/unity.component';
import { AddUnityComponent } from './add-unity/add-unity.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";
import { MenubarComponent } from './menubar/menubar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'unitys', component: UnityComponent},
  {path: 'add-unity', component: AddUnityComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnityComponent,
    AddUnityComponent,
    RegistrationComponent,
    MenubarComponent,
    SidebarComponent,
    UsermenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, ClickOutsideModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
