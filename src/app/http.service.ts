import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

 private url= 'https://dummyjson.com/posts';
 constructor(private httpClient: HttpClient) { }
 getUsers(skip: number){
  return this.httpClient.get(this.url + '?skip=' + skip);
 }
}
 