import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phone=new FormGroup ({ phonenumber:new FormControl('',[Validators.required]),
  otpvalid:new FormControl('',[Validators.required])
  });

   validcheck:any="";
   showinput:boolean=true;
   showinput1:boolean=false;
   showinput2:boolean=true;
   val1=false
   val2=false
   val3=false
   val4=false
   constructor(public value:HeroService){
     this.value.elements;
   }
   onSubmit(){
     localStorage.setItem("token","9445886295");
     
     this.value.phoneCheck(this.phone.value.phonenumber).subscribe(
       (sucess)=>{
        // const validator =this.phone.get('phonenumber')?.errors;
     // console.log(validator);
         this.showinput=false;
         this.showinput1=true;
         this.val1=true;
       setTimeout(()=>{                      
           this.val1=false;
       },3000);
       },
       (failed:any)=>{
         this.showinput=true;
         this.showinput1=false;
         this.val2=true;
         setTimeout(()=>{                      
           this.val2=false;
       },3000);
       },
    );
   }
   onOtp(){
    console.log(this.phone.value.otpvalid)
     this.value.otpChecked(this.phone.value.otpvalid).subscribe(
       (sucess)=>{
         this.showinput=false;
         this.showinput1=false;
         this.val3=true
         setTimeout(()=>{
           this.val3=false;
           this.validcheck=sucess;
         },3000)
       },
       (failed)=>{
         this.showinput=false;
         this.showinput1=true;
         this.val4=true
         setTimeout(()=>{
           this.val4=false;
         },3000)
       });
   }
   logout(){
    localStorage.removeItem("token");
   }
  
}
