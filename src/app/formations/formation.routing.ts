/**
 * Created by Majdi Bali on 25/04/2018.
 */
import {Routes} from '@angular/router';
import {UnitiesAccueilComponent} from "../unities/unities-accueil/unities-accueil.component";
import {UnitiesListComponent} from "../unities/unitiesList/unitiesList.component";
import {AddUnityComponent} from "../unities/add-unity/add-unity.component";
import {UnityComponent} from "../unities/unity/unity.component";
import {FormationsListeComponent} from "./formations-liste/formations-liste.component";
import {AddFormationComponent} from "./add-formation/add-formation.component";
import {FormationAccueilComponent} from "./formation-accueil/formation-accueil.component";
import {FormationContentComponent} from "./formation-content/formation-content.component";


export const FormationRouting: Routes = [
  {
    path: 'formation',
    component: AddFormationComponent,
    children: [
      {
        path: '',
        component: FormationsListeComponent
      },
    ]
  },
  {
    path: 'formation/:idF',
    component: AddFormationComponent,
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

    ]
  },
  {
    path: 'formationencours',
    component: AddFormationComponent,
    children: [
      {
        path: '',
        component: FormationsListeComponent
      },
    ]
  },
  {
    path: 'formationencours/:idF',
    component: AddFormationComponent,
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

    ]
  },


]
