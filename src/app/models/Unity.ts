import {Formation} from "./Formation";
import {Resource} from "./resource";
/**
 * Created by Majdi Bali on 19/04/2018.
 */
export class Unity {
  unityId : number;
  unityName : String;
  description : String;
  creationDate : String;
  startDate : String;
  endDate : String;
  active : Boolean;
  orderU : number
  formation : Formation
  resource: [Resource]
}
