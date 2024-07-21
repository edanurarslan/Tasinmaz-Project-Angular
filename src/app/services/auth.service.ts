import { Injectable } from '@angular/core';
import { Kullanicigirs } from '../models/kullanicigirs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { tokenNotExpired } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient : HttpClient, private router: Router) { }
//, private alertifyService :AlertifyService
// yukarıdaki yorum satırı conts içindeki Router yazısının yanına yazılacak alertifyyyy


path = "https://localhost:44338/api/Auth/";

userToken:any;
decodedToken:any;
private jwtHelper = new JwtHelperService();
TOKEN_KEY="token";

login(kullanici:Kullanicigirs){
  let headers =new HttpHeaders();
  headers = headers.append("Content-Type", "application/json");
  this.httpClient.post(this.path+"login",kullanici, {headers:headers})
  .subscribe(data=>{
    this.saveToken(data['tokenString'])
    this.userToken = data['tokenString']
    this.decodedToken = this.jwtHelper.decodeToken(data['tokenString'])
    //this.alertifyService.success("Sisteme giriş yapıldı.")
    this.router.navigateByUrl('/mevcut-tasinmazlar')
    
  });
}

register(kullanici:Kullanicigirs){
  let headers =new HttpHeaders();
  headers = headers.append("Content-Type", "application/json");
  this.httpClient.post(this.path+"register",kullanici, {headers:headers}).subscribe(data=>{
    
  });
}

logout(){
  localStorage.removeItem(this.TOKEN_KEY);
}


saveToken(token){
  localStorage.setItem(this.TOKEN_KEY, token);
}

loggedin(){
  return (!this.jwtHelper.isTokenExpired(this.TOKEN_KEY));
}

get token(){
  return localStorage.getItem(this.TOKEN_KEY);
}

getCurrentUserId(){
  return this.jwtHelper.decodeToken(localStorage.getItem(this.token)).nameid;
}



}

