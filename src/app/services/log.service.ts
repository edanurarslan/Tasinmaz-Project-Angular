import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LogService {


path="https://localhost:44338/api/Logs/"

constructor(private httpClient:HttpClient) { }
getLog():Observable<Log[]>{
  return this.httpClient.get<Log[]>(this.path+"all");
}

addLog(log: Log): Observable<any> {
  return this.httpClient.post(this.path + "add", log);
}


}
