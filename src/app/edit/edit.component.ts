import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from '../hero.service';
import {deepCopy} from "@angular-devkit/core/src/utils/object";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private route:ActivatedRoute,public heroservice:HeroService){
    this.heroservice.idedit
  }
  saved:any=true;
  updated:any
  ngOnInit(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
    });
  }
  onEdit(){
    this.heroservice.onUpdate(this.heroservice.idedit).subscribe((value)=>{
      this.saved=false;
      this.updated="Updated SuccesFully"
    })
  }
}
