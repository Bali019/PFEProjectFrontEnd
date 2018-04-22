import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../authentication.service";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Resource} from "../../app/models/resource";
import 'rxjs/add/operator/map';
/**
 * Created by Majdi Bali on 13/04/2018.
 */
@Injectable()
export class TextService {
  private host: string = "http://localhost:8080";
  private jwtToken;

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

  }

  getText(id) : Observable<Resource>  {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get<Resource>(this.host + "/getText/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }


  saveText(text){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/addText",text,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

}
