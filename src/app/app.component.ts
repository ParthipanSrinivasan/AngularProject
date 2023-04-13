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
 // nam: any[]=['anil','dis','assd','hadfjk'];
  value: any=[];
 // name ='';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
  });
   myClickFunction(value:any) { 
   console.log(value);
  // this.name+=value;
  this.profileForm?.get('firstName')?.setValue(value);
}
onSubmit() {
  console.log(this.profileForm.value);
 
}
constructor(private httpService: HttpService, fb: FormBuilder) {
    this.httpService.sendGetRequest().subscribe((data:any) => {
        this.value=data;
        console.log(this.value);
    });
  console.log(this.value);
  }
}


