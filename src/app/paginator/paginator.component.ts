import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {deepCopy} from "@angular-devkit/core/src/utils/object";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  constructor(public heroservice:HeroService, public matDialog:MatDialog ){
  this.heroservice.elements;
  this.heroservice.id;
 }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  displayedColumns: string[] = ['phone','otp','action'];
  dataSource:any;
  edit:any={
    phone:"",otp:""
  }
  edit1:any;
  getServerData(e:PageEvent){
    this.heroservice.ngAfter(e.pageSize,e.pageIndex).subscribe(element=>{
    this.dataSource=element;
    }); 
  }
  open(content:any,a:any,b:any){
    this.matDialog.open(content);
    this.edit.phone=a;
    this.edit.otp=b;
    let val=deepCopy(this.edit);
    this.edit1=val;
  }
  onSubmit(){
   this.heroservice.editButton(this.edit,this.edit1).subscribe((element)=>{
      this.dataSource=element;
   });
  }
}

