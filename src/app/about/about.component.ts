import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'pagination';
  POSTS:any;
  itemsPerPage: number = 30;
  allUsers: number = 0;
  pagination: number =1;
  constructor (private httpService:HttpService){}
  ngOnInit():void{
    this.postList();
    console.log(this.postList());
  }
 postList(){
    this.httpService.getUsers(this.pagination).subscribe((response:any) => {
     this.POSTS = response.posts;
    this.allUsers = response.total;
     console.log(this.POSTS);
  })
  }
 renderPage(event:number){
  this.pagination =event
  this.postList();
 }
}
