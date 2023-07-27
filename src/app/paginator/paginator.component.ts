import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {deepCopy} from "@angular-devkit/core/src/utils/object";
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  constructor(public heroservice:HeroService, public matDialog:MatDialog ){
  this.heroservice.elements;
  this.heroservice.dumy;
 }
 update=new FormGroup ({ phone:new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]),
  otp:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
  id:new FormControl('')
  });
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  displayedColumns: string[] = ['id','phone','otp','action'];
  dataSource:any;
  edit:any={
   id:"", phone:"",otp:""
  }
  edit1:any;
  getServerData(e:PageEvent){
    this.heroservice.ngAfter(e.pageSize,e.pageIndex).subscribe(element=>{
    this.dataSource=element;
    }); 
  }
  open(content:any,row:any){
    this.matDialog.open(content);
    this.update.controls['phone'].setValue(row.phone);
    this.update.controls['otp'].setValue(row.otp);
    this.update.controls['id'].setValue(row.id);
  }
  onSubmit(){
   this.heroservice.editButton(this.update.value).subscribe((element)=>{
      
   });
  }
}

