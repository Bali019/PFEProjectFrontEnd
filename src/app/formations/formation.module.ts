/**
 * Created by Majdi Bali on 24/04/2018.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {SidebarModule} from "../sidebar/sidebar.module";
import {NavbarModule} from "../shared/navbar/navbar.module";
import {FooterModule} from "../shared/footer/footer.module";
import {FixedPluginModule} from "../shared/fixedplugin/fixedplugin.module";
import {NguiMapModule} from "@ngui/map";
import {HttpClientModule} from "@angular/common/http";
import {MyDatePickerModule} from "mydatepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatSlideToggleModule} from "@angular/material";
import {CovalentCodeEditorModule} from "@covalent/code-editor";
import {CovalentTextEditorModule} from "@covalent/text-editor";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentHighlightModule} from "@covalent/highlight";
import {SweetAlert2Module} from "@toverux/ngx-sweetalert2";
import {FormationService} from "./formation.service";
import {FormationRouting} from "./formation.routing";
import {AddFormationComponent} from "./add-formation/add-formation.component";
import {UnitysModule} from "../unities/unitys.module";
import { FormationsListeComponent } from './formations-liste/formations-liste.component';
import { FormationAccueilComponent } from './formation-accueil/formation-accueil.component';
import { FormationContentComponent } from './formation-content/formation-content.component';
import {NgxStepperModule} from "ngx-stepper";
import {UnityComponent} from "../unities/unity/unity.component";
import { FormationComponent } from './formation.component';
import { AddFormationPlanComponent } from './add-formation/add-formation-plan/add-formation-plan.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(FormationRouting, {onSameUrlNavigation: 'reload'}),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
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
    SweetAlert2Module.forRoot(),
    UnitysModule,
    NgxStepperModule,/*
    MyDatePickerModule,*/

  ],
  declarations: [
    AddFormationComponent,
    FormationsListeComponent,
    FormationAccueilComponent,
    FormationContentComponent,
    FormationComponent,
    AddFormationPlanComponent,
  ],
  providers: [FormationService],
})
export class FormationModule {}
