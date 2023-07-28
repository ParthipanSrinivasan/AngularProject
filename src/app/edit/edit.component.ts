import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private route:ActivatedRoute,public heroservice:HeroService){
    this.heroservice.dumy;
  }
  update=new FormGroup ({ phone:new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]),
  otp:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]),
  id:new FormControl('')
  });
  saved:any=true;
  updated:any 
  editvalue:any
  minlength:any=false;
  minotp:any=false;
  ngOnInit(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.heroservice.idValueGet(id).subscribe((value)=>{
        this.editvalue=value;
        this.update.controls['id'].setValue(this.editvalue.id);
        this.update.controls['phone'].setValue(this.editvalue.phone);
        this.update.controls['otp'].setValue(this.editvalue.otp);
      })
    });
  }
  onEdit(){
    this.heroservice.onUpdate(this.update.value).subscribe((value)=>{
      this.updated="Updated SuccesFully"
     this.minlength=this.update.get('phone')?.hasError('minlength');
     this.minotp=this.update.controls['otp'].hasError('minlength');
     console.log(this.update.get('phone')?.valid);
     console.log(this.update.get('phone')?.invalid);
    })
  }
}
