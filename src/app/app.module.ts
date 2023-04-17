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
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { NgClass, NgStyle } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [RouterModule],
  providers: [HttpService], 
  bootstrap: [AppComponent]
})   
export class AppModule { 
  
}
