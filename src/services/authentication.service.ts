import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
import {Router} from "@angular/router";
/**
 * Created by Majdi Bali on 27/03/2018.
 */
@Injectable()
export class AuthenticationService{
  private host: string = "http://localhost:8080";
  private  jwtToken;
  private roles:Array<any>;
  constructor(private http: HttpClient, private router : Router){}
  login(user){
    return this.http.post(this.host+"/login",user,{observe:`response`});
  }
  saveToken(jwt : string){
    this.jwtToken = jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }
  loadToken(){
    this.jwtToken=localStorage.getItem('token');
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
}
