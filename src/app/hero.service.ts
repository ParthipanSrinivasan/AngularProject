import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  elements:any=[
    {"id":111,"phone":9445886291,"otp":11234},
    {"id":112,"phone":9445886292,"otp":12234},
    {"id":113,"phone":9445886293,"otp":13234},
    {"id":114,"phone":9445886294,"otp":14234},
    {"id":115,"phone":9445886295,"otp":15234},
    {"id":116,"phone":9445886296,"otp":16234},
    {"id":117,"phone":9445886297,"otp":17234},
    {"id":118,"phone":9445886298,"otp":18234},
    {"id":119,"phone":9445886299,"otp":19234},
    {"id":110,"phone":9445886281,"otp":11234},
    {"id":121,"phone":9445886282,"otp":12234},
    {"id":122,"phone":9445886283,"otp":13234},
    {"id":123,"phone":9445886284,"otp":14234},
    {"id":124,"phone":9445886285,"otp":15234},
    {"id":125,"phone":9445886286,"otp":16234},
    {"id":126,"phone":9445886287,"otp":17234},
    {"id":127,"phone":9445886288,"otp":18234},
    {"id":128,"phone":9445886289,"otp":19234},
    {"id":129,"phone":9445886271,"otp":11234},
    {"id":120,"phone":9445886272,"otp":12234},
    {"id":131,"phone":9445886273,"otp":13234},
    {"id":132,"phone":9445886274,"otp":14234},
    {"id":133,"phone":9445886275,"otp":15234},
    {"id":134,"phone":9445886276,"otp":16234},
    {"id":135,"phone":9445886277,"otp":17234},
    {"id":136,"phone":9445886278,"otp":18234},
    {"id":137,"phone":9445886279,"otp":19234},
    {"id":138,"phone":9445886261,"otp":11234},
    {"id":139,"phone":9445886262,"otp":12234},
    {"id":130,"phone":9445886263,"otp":13234},
    {"id":141,"phone":9445886264,"otp":14234},
    {"id":142,"phone":9445886265,"otp":15234},
    {"id":143,"phone":9445886266,"otp":16234},
    {"id":144,"phone":9445886267,"otp":17234},
    {"id":145,"phone":9445886268,"otp":18234},
  ];
  dumy:any=this.elements;
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
          val.next(this.dumy.slice((pageIndex*pageSize),
            (pageIndex*pageSize)+pageSize));
        })
        return obser;
      }
      editButton(updatvalue:any){
        const obser=new Observable((val)=>{
          this.dumy.forEach((element:any,index:any) => {
            if(updatvalue.id===this.dumy[index].id){
              element['phone']=updatvalue.phone;
              element['otp']=updatvalue.otp;
            }
           });
        })
        return obser;
      }
      inLogin(){
        return !!localStorage.getItem('token');
      }
      idValueGet(idvalue:any){
        const obser=new Observable((val)=>{
          this.dumy.forEach((element:any)=>{
            if(element.id==idvalue){
              val.next(element);
            }
          })
        })
        return obser;
      }
      onUpdate(update:any){
        const obser=new Observable((val)=>{
          this.dumy.forEach((element:any)=>{
            if(element.id==update.id){
              element["phone"]=update.phone;
              element["otp"]=update.otp;
              val.next(element)
            }
          });
        })
        return obser;
      }
}
