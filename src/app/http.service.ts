import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint='https://dummyjson.com/posts?limit=100'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
   return this.http.get(endpoint);
 }
}
