import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { UnityComponent }   from './unitys/unity/unity.component';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AddUnityComponent} from "./unitys/add-unity/add-unity.component";
import {AddTextComponent} from "./resources/text-editor/add-text/add-text.component";
import {AddCodeComponent} from "./resources/code-editor/add-code/add-code.component";
import {UploadFileComponent} from "./resources/fileResource/upload-file/upload-file.component";
import {ImageUploadComponent} from "./resources/image/image-upload/image-upload.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'unity',
        component: UnityComponent,
      children: [
        {path: '', component: UnityComponent},
        {path: 'addText', component: AddTextComponent },
        {path: 'addCode', component: AddCodeComponent},
        {path: 'addFile', component: UploadFileComponent},
        {path: 'addImage', component: ImageUploadComponent},
      ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'add-unitys',
        component: AddUnityComponent
    },

]
