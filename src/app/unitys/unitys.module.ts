/**
 * Created by Majdi Bali on 24/04/2018.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {UnityComponent} from "./unity/unity.component";
import {AddUnityComponent} from "./add-unity/add-unity.component";
import {UnitysComponent} from "./unitys.component";
import {UnityService} from "../../services/unity.service";
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


@NgModule({
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
    MatDialogModule
  ],
  declarations: [
    UnityComponent,
    AddUnityComponent,
    UnitysComponent
  ],
  providers: [UnityService]
})
export class UnitysModule {}