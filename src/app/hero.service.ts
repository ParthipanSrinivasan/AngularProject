import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  elements:any=[
    {"phone":9445886291,"otp":11234},
    {"phone":9445886292,"otp":12234},
    {"phone":9445886293,"otp":13234},
    {"phone":9445886294,"otp":14234},
    {"phone":9445886295,"otp":15234},
    {"phone":9445886296,"otp":16234},
    {"phone":9445886297,"otp":17234},
    {"phone":9445886298,"otp":18234},
    {"phone":9445886299,"otp":19234},
    {"phone":9445886291,"otp":11234},
    {"phone":9445886292,"otp":12234},
    {"phone":9445886293,"otp":13234},
    {"phone":9445886294,"otp":14234},
    {"phone":9445886295,"otp":15234},
    {"phone":9445886296,"otp":16234},
    {"phone":9445886297,"otp":17234},
    {"phone":9445886298,"otp":18234},
    {"phone":9445886299,"otp":19234},
    {"phone":9445886291,"otp":11234},
    {"phone":9445886292,"otp":12234},
    {"phone":9445886293,"otp":13234},
    {"phone":9445886294,"otp":14234},
    {"phone":9445886295,"otp":15234},
    {"phone":9445886296,"otp":16234},
    {"phone":9445886297,"otp":17234},
    {"phone":9445886298,"otp":18234},
    {"phone":9445886299,"otp":19234},
    {"phone":9445886291,"otp":11234},
    {"phone":9445886292,"otp":12234},
    {"phone":9445886293,"otp":13234},
    {"phone":9445886294,"otp":14234},
    {"phone":9445886295,"otp":15234},
    {"phone":9445886296,"otp":16234},
    {"phone":9445886297,"otp":17234},
    {"phone":9445886298,"otp":18234},
  ];
    paginator:any[]=[];
      phoneCheck(value:any){
        const obser=new Observable((val)=>{
        setTimeout(() => {
          let vari=this.elements.find((element:any) =>(element.phone==value));
          //console.log(vari==undefined);
          if(vari.phone==value){
           val.next("Valid");
          }
          else if(vari==undefined){
           val.error("invalid");
          }
        },3000);
      });
        return obser;
      }
      otpChecked(value:any){
        const obser=new Observable((val)=>{
          setTimeout(() => {
            let vari=this.elements.find((element:any)=>(element.otp==value));
            if(vari.otp==value){
              val.next("API-Scuessfully called");
            }
            else if(vari==undefined){
              val.error("invalid-OTP");
            }
          },3000);
          
        });
        return obser;
      }
      ngAfter(pageSize:any,pageIndex:any){
        const obser=new Observable((val)=>{
          val.next(this.elements.slice(pageIndex*pageSize,
            pageIndex*pageSize+pageSize));
        })
        return obser;
      }
}
