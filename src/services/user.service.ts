import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
import {User} from "../app/models/user";
import {Observable} from "rxjs/Observable";
/**
 * Created by Majdi Bali on 06/04/2018.
 */
@Injectable()
export class UserService {
  private host: string = "http://localhost:8080";
  private  jwtToken;
constructor(private http : HttpClient , private auth : AuthenticationService ){}
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

    console.log(this.jwtToken);
  }
  getUser(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/user",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  saveUnity(unity){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/unitys",unity);
  }
 /* updateUser(user){
    return this.http.put(this.host+"/user",user,{ observe: 'response' })
  }*/
  updateUser(user ){

const response = this.http.put(this.host+"/user2", user, {headers:new HttpHeaders({'Authorization':this.jwtToken})}).toPromise();
return response;
  }
}
