import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ValidatorFn,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  profileForm = new FormGroup({
    first_name: new FormControl('parthipan',[Validators.required]),
    sure_name: new FormControl('',[Validators.required]),
    user_id: new FormControl('',[Validators.required]),
    new_password: new FormControl('m1m2m3m4m5m6',[Validators.required]),
    date : new FormControl('',[Validators.required])
  })
  loginUser()
  {
    console.log(this.first_name?.value)
    console.log(this.sure_name?.value)
  }
  get first_name(){
    return this.profileForm.get('first_name')
  }
  get sure_name(){
    return this.profileForm.get('sure_name')
  }
  get user_id(){
    return this.profileForm.get('user_id')
  }
  get new_password(){
    return this.profileForm.get('new_password')
  }
  get date(){
    return this.profileForm.get('date')
  }
}
