import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
import {Router} from "@angular/router";
import {log} from "util";
import {logger} from "codelyzer/util/logger";
/**
 * Created by Majdi Bali on 27/03/2018.
 */
@Injectable()
export class AuthenticationService{
  private host: string = "http://localhost:8080";
  private  jwtToken;
  private roles:Array<any>;
  private userId;
  constructor(private http: HttpClient, private router : Router){}
  login(user){
    return this.http.post(this.host+"/login",user,{observe:`response`});
  }
  saveToken(jwt : string){
    this.jwtToken = jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    this.userId=jwtHelper.decodeToken(this.jwtToken).username;
    console.log("User ID ", this.jwtToken , +" user name is ",this.userId);
  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
    console.log(this.jwtToken);
  }
getUnitys(){
    if (this.jwtToken==null) this.loadToken();
    return this.http.get(this.host+"/unitys",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}
logout(){
  this.jwtToken=null;
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
}
isAdmin(){
  if (this.jwtToken==null) this.loadToken();
for (let r of this.roles){
  if(r.authority == 'ADMIN') return true;
}
return false;
}
isConnected(){
  if ( localStorage.getItem('token')==null){
    return false;
  }
  return true;
}
saveUnity(unity){

  let headers= new HttpHeaders();
  headers.append('Authorization',this.jwtToken);
  return this.http.post(this.host+"/unitys",unity,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}
getRole(){

}
}
