import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
/**
 * Created by Majdi Bali on 05/04/2018.
 */
@Injectable()
export class RegistrationService {
  private host: string = "http://localhost:8080";
  constructor(private http: HttpClient, private router : Router){}

  saveUser(user){
    let headers= new HttpHeaders();
    return this.http.post(this.host+"/register",user);
  }
}
