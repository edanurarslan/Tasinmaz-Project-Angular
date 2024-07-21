import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasinmaz } from '../models/tasinmaz';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {

constructor(private httpClient:HttpClient) { }
path = "https://localhost:44338/api/Tasinmazs/";

getTasinmaz():Observable<Tasinmaz[]>{
  return this.httpClient.get<Tasinmaz[]>(this.path+"all");
}

silTasinmaz(id:number){
  return this.httpClient.delete(this.path+"delete?id="+id);
}

/*updateTasinmaz(tasinmaz:Tasinmaz){
  return this.httpClient.put(this.path+"update",tasinmaz);
}
*/

add(tasinmaz){
  return this.httpClient.post(this.path + "add", tasinmaz).subscribe();
}

update(id:number) {
  return this.httpClient.put(this.path + "update", id).subscribe();
}



/*update(tasinmaz) {
  this.httpClient.put(this.path+ "update", tasinmaz).subscribe(
    (response) => {
      console.log('Veri güncellendi:', response);
      //this.closeEditModal();
    },
    (error) => {
      console.error('Veri güncelleme hatası:', error);
    }
  )};
*/

}
