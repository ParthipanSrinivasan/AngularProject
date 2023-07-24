import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  constructor(private heroservice:HeroService){
  this.heroservice.elements;
 }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  displayedColumns: string[] = ['phone','otp'];
  dataSource:any;
  getServerData(e:PageEvent){
    console.log(e);
    this.heroservice.ngAfter(e.pageSize,e.pageIndex).subscribe(element=>{
    this.dataSource=element;
      
    });
        this.pageIndex =e.pageIndex;
        this.pageSize = e.pageSize;
        this.length = e.length;
        
  }
}

