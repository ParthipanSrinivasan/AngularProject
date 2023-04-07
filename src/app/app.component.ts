import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'blog';
 parentFuncation(data:any){
  console.log(data);
 }
}

