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
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  constructor (private httpService:HttpService){}
  ngOnInit():void{
    this.postList();
  }
 postList(): void{
    this.httpService.getAllPosts().subscribe((response) => {
     this.POSTS = response.posts;
     console.log(this.POSTS);
  })
  }
  onTableDataChange(event: any){
    this.page = event;
    this.postList();
  }
  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }
}