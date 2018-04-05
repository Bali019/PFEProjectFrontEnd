import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnityComponent } from './unity/unity.component';
import { AddUnityComponent } from './add-unity/add-unity.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";
import {UserComponent} from "./user/user.component";
import {SidebarModule} from "./sidebar/sidebar.module";
import {NavbarModule} from "./shared/navbar/navbar.module";
import {FooterModule} from "./shared/footer/footer.module";
import {FixedPluginModule} from "./shared/fixedplugin/fixedplugin.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutes} from "./app.routing";
import { NguiMapModule} from '@ngui/map';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'unitys', component: UnityComponent},
  {path: 'add-unity', component: AddUnityComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user', component: UserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UnityComponent,
    AddUnityComponent,
    RegistrationComponent,
    UserComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
