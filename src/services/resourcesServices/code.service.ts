import {Injectable} from "@angular/core";
import {AuthenticationService} from "../authentication.service";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
/**
 * Created by Majdi Bali on 19/04/2018.
 */
@Injectable()
export class CodeService{
  private host: string = "http://localhost:8080";
  private jwtToken;

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
  }

  saveCode(code){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/addCode",code,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
}
