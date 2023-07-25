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
    {"phone":9445886281,"otp":11234},
    {"phone":9445886282,"otp":12234},
    {"phone":9445886283,"otp":13234},
    {"phone":9445886284,"otp":14234},
    {"phone":9445886285,"otp":15234},
    {"phone":9445886286,"otp":16234},
    {"phone":9445886287,"otp":17234},
    {"phone":9445886288,"otp":18234},
    {"phone":9445886289,"otp":19234},
    {"phone":9445886271,"otp":11234},
    {"phone":9445886272,"otp":12234},
    {"phone":9445886273,"otp":13234},
    {"phone":9445886274,"otp":14234},
    {"phone":9445886275,"otp":15234},
    {"phone":9445886276,"otp":16234},
    {"phone":9445886277,"otp":17234},
    {"phone":9445886278,"otp":18234},
    {"phone":9445886279,"otp":19234},
    {"phone":9445886261,"otp":11234},
    {"phone":9445886262,"otp":12234},
    {"phone":9445886263,"otp":13234},
    {"phone":9445886264,"otp":14234},
    {"phone":9445886265,"otp":15234},
    {"phone":9445886266,"otp":16234},
    {"phone":9445886267,"otp":17234},
    {"phone":9445886268,"otp":18234},
  ];
  id:any=this.elements;
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
          val.next(this.id.slice((pageIndex*pageSize),
            (pageIndex*pageSize)+pageSize));
        })
        return obser;
      }
      editButton(edit:any,edit1:any){
        const obser=new Observable((val)=>{
          this.id.forEach((element:any,index:any) => {
            if(element.phone==edit1.phone){
              this.elements[index]=edit;
              val.next(this.elements)
            }
           });
        })
        return obser;
      }
      inLogin(){
        return !!localStorage.getItem('token');
      }
}
