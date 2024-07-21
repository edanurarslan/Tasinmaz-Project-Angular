import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kullanici } from '../models/kullanici';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

constructor(private httpClient:HttpClient) { }
path = "https://localhost:44338/api/Kullanicis/";
path2 = "https://localhost:44338/api/Kullanicis/";

getKullanici():Observable<Kullanici[]>{
  return this.httpClient.get<Kullanici[]>(this.path+"all");
}

silKullanici(id:number){
  return this.httpClient.delete(this.path2+"delete?id="+id);
}

add(kullanici){
  return this.httpClient.post(this.path + "add", kullanici).subscribe();
}


}
