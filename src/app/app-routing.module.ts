import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorComponent } from './paginator/paginator.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';

const routes: Routes = [
  {path:"listTable",component:PaginatorComponent},
  {path:"login",component:LoginComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
