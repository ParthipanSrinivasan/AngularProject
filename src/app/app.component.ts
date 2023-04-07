import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* export class AppComponent {
  formdata:any = {};

  submit(){
    console.log(this.formdata);
  }
} */
export class AppComponent implements OnInit {
  userName:any;
  sureName:any;
  emailId:any;
  newPassword:any;
  date:any;
  formdata:any;
  ngOnInit() {
    this.formdata = new FormGroup({ 
      userName: new FormControl(),
      sureName: new FormControl(),
      emailId: new FormControl(),
      newPassword: new FormControl(),
      date: new FormControl()
   }); 
  }
  onClickSubmit(data:any) {
    this.userName = data.userName;
    this.sureName = data.sureName;
    this.emailId = data.emailId;
    this.newPassword = data.newPassword;
    this.date = data.date;
    console.log(this.userName);
    console.log(this.sureName);
    console.log(this.emailId);
    console.log(this.newPassword);
    console.log(this.date);
  }
}

