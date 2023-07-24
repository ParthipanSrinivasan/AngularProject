import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  constructor(private user:HeroService){
  this.user.elements;
 }
   length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  displayedColumns: string[] = ['phone','otp'];
  dataSource:any[] =this.user.elements;
  
  getServerData(e:PageEvent){
    console.log(e)
    this.user.ngAfter().subscribe(element=>{
      console.log();
    });
        this.pageIndex =e.pageIndex;
        this.pageSize = e.pageSize;
        this.length = e.length;
        
  }
}

