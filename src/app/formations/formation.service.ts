/**
 * Created by Majdi Bali on 22/04/2018.
 */
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Unity} from "../models/Unity";
import {Formation} from "../models/Formation";
@Injectable()
export class FormationService {
  private host: string = "http://localhost:8080";
  private jwtToken;
  private idFormation;
  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

    console.log(this.jwtToken);
  }

  saveUnity(Formation){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/Formations",Formation);
  }
  getFormation(id) : Observable<Formation>  {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get<Formation>(this.host + "/getFormation/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getFormationsCreatedByConnected(username) {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/userFormations/"+username, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  public setFormationId(value){
    this.idFormation = value;
  }

  public getFormationId(){
    return this.idFormation;
  }
  getFormations() {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/getFormations", {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  saveFormation(formation){
    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/createFormation",formation);
  }
}
