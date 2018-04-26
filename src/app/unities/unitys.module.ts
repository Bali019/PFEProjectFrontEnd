/**
 * Created by Majdi Bali on 24/04/2018.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {UnityComponent} from "./unity/unity.component";
import {AddUnityComponent} from "./add-unity/add-unity.component";
import {UnitiesListComponent} from "./unitiesList/unitiesList.component";
import {UnityService} from "./unity.service";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {SidebarModule} from "../sidebar/sidebar.module";
import {NavbarModule} from "../shared/navbar/navbar.module";
import {FooterModule} from "../shared/footer/footer.module";
import {FixedPluginModule} from "../shared/fixedplugin/fixedplugin.module";
import {NguiMapModule} from "@ngui/map";
import {HttpClientModule} from "@angular/common/http";
import {MyDatePickerModule} from "mydatepicker";
import {AppRoutes} from "../app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatSlideToggleModule} from "@angular/material";
import {CovalentCodeEditorModule} from "@covalent/code-editor";
import {CovalentTextEditorModule} from "@covalent/text-editor";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentHighlightModule} from "@covalent/highlight";
import {UnityRouting} from "./unity.routing";
import {ImageComponent} from "../resources/image/afficher-image/image.component";
import {ImageUploadComponent} from "../resources/image/image-upload/image-upload.component";
import {UploadFileComponent} from "../resources/fileResource/upload-file/upload-file.component";
import {AfficherTextComponent} from "../resources/text-editor/afficher-text/afficher-text.component";
import {AddCodeComponent} from "../resources/code-editor/add-code/add-code.component";
import {AfficherCodeComponent} from "../resources/code-editor/afficher-code/afficher-code.component";
import {AddTextComponent} from "../resources/text-editor/add-text/add-text.component";
import { UnitiesAccueilComponent } from './unities-accueil/unities-accueil.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(UnityRouting),
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
    MatDialogModule
  ],
  declarations: [
    UnityComponent,
    AddUnityComponent,
    UnitiesListComponent,
    ImageComponent,
    ImageUploadComponent,
    UploadFileComponent,
    AddCodeComponent,
    AfficherCodeComponent,
    AddTextComponent,
    AfficherTextComponent,
    UnitiesAccueilComponent,
  ],
  providers: [UnityService]
})
export class UnitysModule {}
