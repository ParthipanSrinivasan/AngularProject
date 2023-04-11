import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  nam: any[]=['anil','dis','assd','hadfjk'];
  value: any=[];
  show =true;
  @Input()
  ngSwitch: any
  @Input()
  ele = 'name'
  @Input()
  blue= 'yellow'
  constructor(private httpService: HttpService) {
    this.httpService.sendGetRequest().subscribe((data:any) => {
        this.value=data;
        console.log(this.value);
    });
  console.log(this.value);
  }
}


