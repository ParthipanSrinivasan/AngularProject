import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';

const routes:Routes = [
  {path:'home',component:HomeComponent },
  {path:'user',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'server',component:ServerComponent}
 // { path: '',   redirectTo: '/home', pathMatch: 'full'},
  //{ path: '**', component:UserComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    DasboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [], 
  bootstrap: [AppComponent]
})   
export class AppModule { 
  
}
