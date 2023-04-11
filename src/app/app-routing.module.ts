import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { DasboardComponent } from './dasboard/dasboard.component';


const routes:Routes = [
 /* {
    component:AboutComponent,
    path:'about'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:ServerComponent,
    path:'server'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:DasboardComponent,
    path:'dasbord'
  } */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
