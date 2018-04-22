import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../authentication.service";
import {JwtHelper} from "angular2-jwt";
/**
 * Created by Majdi Bali on 13/04/2018.
 */
@Injectable()
export class ImageService {
  private host: string = "http://localhost:8080";
  private jwtToken;

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();

  }

  getImage(id) {
    if (this.jwtToken == null) this.loadToken();
    return this.http.get(this.host + "/getImage/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveImage(imageObj){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/uploadImage",imageObj,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  saveFile(file){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/uploadFile",file,{headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
  saveCode(code){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/addCode",code,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  saveText(text){

    let headers= new HttpHeaders();
    headers.append('Authorization',this.jwtToken);
    return this.http.post(this.host+"/addText",text,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }


}