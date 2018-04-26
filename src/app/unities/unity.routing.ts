/**
 * Created by Majdi Bali on 25/04/2018.
 */
import { Routes } from '@angular/router';
import {AddTextComponent} from "../resources/text-editor/add-text/add-text.component";
import {AddCodeComponent} from "../resources/code-editor/add-code/add-code.component";
import {UploadFileComponent} from "../resources/fileResource/upload-file/upload-file.component";
import {ImageUploadComponent} from "../resources/image/image-upload/image-upload.component";
import {UnityComponent} from "./unity/unity.component";
import {UnitiesListComponent} from "./unitiesList/unitiesList.component";
import {AddUnityComponent} from "./add-unity/add-unity.component";




export const UnityRouting: Routes = [
  {
    path: 'formation',
    component: UnitiesListComponent,
    children: [
      {
        path: '',
        component: UnitiesListComponent
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
        path: 'add-unity',
        component: AddUnityComponent
      },
    ]
  },


]
