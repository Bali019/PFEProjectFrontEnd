/**
 * Created by Majdi Bali on 25/04/2018.
 */
import {Routes} from '@angular/router';
import {UnitiesAccueilComponent} from "../unities/unities-accueil/unities-accueil.component";
import {UnitiesListComponent} from "../unities/unitiesList/unitiesList.component";
import {AddUnityComponent} from "../unities/add-unity/add-unity.component";
import {UnityComponent} from "../unities/unity/unity.component";
import {FormationsListeComponent} from "./formations-liste/formations-liste.component";
import {FormationAccueilComponent} from "./formation-accueil/formation-accueil.component";
import {FormationContentComponent} from "./formation-content/formation-content.component";
import {FormationComponent} from "./formation.component";
import {AddFormationComponent} from "./add-formation/add-formation.component";
import {UpdateUnityComponent} from "../unities/update-unity/update-unity.component";


export const FormationRouting: Routes = [
  {
    path: 'formation',
    component: FormationComponent,
    children: [
      {
        path: '',
        component: FormationsListeComponent
      }, {
        path: 'addFormation',
        component: AddFormationComponent
      }
    ]
  },
  {
    path: 'formation/:idF',
    component: FormationComponent,
    children: [
      {
        path: '',
        component: FormationAccueilComponent
      },
      {
        path: 'unities',
        component: FormationContentComponent,
      },

      {
        path: 'updateUnity/:idU',
        component: UpdateUnityComponent
      },

      {
        path: 'unities/:idU',
        component: UnityComponent,
      },

    ]
  },
  {
    path: 'formationencours',
    component: FormationComponent,
    children: [
      {
        path: '',
        component: FormationsListeComponent
      },
    ]
  },
  {
    path: 'formationencours/:idF',
    component: FormationComponent,
    children: [
      {
        path: '',
        component: FormationAccueilComponent
      },
      {
        path: 'unities',
        component: FormationContentComponent,
      },

      {
        path: 'unities/addUnity',
        component: AddUnityComponent
      },

      {
        path: 'unities/:idU',
        component: UnityComponent,
      },
      {
        path: 'updateUnity/:idU',
        component: UpdateUnityComponent
      }
    ]
  },


]
