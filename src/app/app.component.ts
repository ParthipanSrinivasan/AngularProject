import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
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