/**
 * Created by Majdi Bali on 22/04/2018.
 */
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Unity} from "../models/Unity";
@Injectable()
export class UnityService {
  private host: string = "http://localhost:8080";
  private jwtToken;

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

    console.log(this.jwtToken);
  }

  saveUnity(unity){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/addUnity",unity,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getUnity(id) : Observable<Unity>  {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get<Unity>(this.host + "/getUnity/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getUnitiesCreatedByConnected(username) {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/userUnities/"+username, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  getFormationUnities(id) {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/formationUnities/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  deleteUnity(id){
    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.delete(this.host+"/deleteUnity/"+id)
  }
}
