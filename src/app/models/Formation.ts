import {FormationCategory} from "./FormationCategory";
import {Unity} from "./Unity";
/**
 * Created by Majdi Bali on 01/05/2018.
 */

export class Formation {
  formationId : number;
  formationName : String;
  description : String;
  creationDate : String;
  startDate : String;
  endDate : String;
  active : Boolean;
  formationCategory : FormationCategory ;
  level : string;
  unities : [Unity]

}