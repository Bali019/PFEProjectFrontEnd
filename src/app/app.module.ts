import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UnityComponent } from './unitys/unity/unity.component';
import { AddUnityComponent } from './unitys/add-unity/add-unity.component';
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
import {RegistrationService} from "../services/registration.service";
import {UserService} from "../services/user.service";
import { ImageComponent } from './resources/image/afficher-image/image.component';
import {ImageService} from "../services/resourcesServices/image.service";
import { ImageUploadComponent } from './resources/image/image-upload/image-upload.component';
import {MyDatePickerModule} from "mydatepicker";
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {FilesService} from "../services/resourcesServices/file.service";
import { UploadFileComponent } from './resources/fileResource/upload-file/upload-file.component';
import { AddCodeComponent } from './resources/code-editor/add-code/add-code.component';
import {CovalentCodeEditorModule} from "@covalent/code-editor";
import {CodeService} from "../services/resourcesServices/code.service";
import { AfficherCodeComponent } from './resources/code-editor/afficher-code/afficher-code.component';
import { AddTextComponent } from './resources/text-editor/add-text/add-text.component';
import {CovalentTextEditorModule} from "@covalent/text-editor";
import {TextService} from "../services/resourcesServices/text.service";
import { AfficherTextComponent } from './resources/text-editor/afficher-text/afficher-text.component';
import {CovalentMarkdownModule} from "@covalent/markdown";
import {UnityService} from "../services/unity.service";
import {CovalentHighlightModule} from "@covalent/highlight";
import { UnitysComponent } from './unitys/unitys.component';
import {UnitysModule} from "./unitys/unitys.module";

const appRoutes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-unitys', component: AddUnityComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user', component: UserComponent},

  {path: 'unity',
    component: UnityComponent,
    children: [
      {path: 'addText', component: AddTextComponent},
      {path: 'addCode', component: AddCodeComponent},
      {path: 'addFile', component: UploadFileComponent},
      {path: 'addImage', component: ImageUploadComponent},
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    DashboardComponent,
    ImageComponent,
    ImageUploadComponent,
    UploadFileComponent,
    AddCodeComponent,
    AfficherCodeComponent,
    AddTextComponent,
    AfficherTextComponent,


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
    HttpClientModule,
    MyDatePickerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    CovalentCodeEditorModule,
    CovalentTextEditorModule,
    CovalentMarkdownModule,
    CovalentHighlightModule,
    MatDialogModule,
    UnitysModule
  ],
  entryComponents: [
    AddCodeComponent
  ],
  providers: [AuthenticationService,RegistrationService,UserService,ImageService,FilesService,TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
