import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorComponent } from './paginator/paginator.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:"listTable",component:PaginatorComponent,canActivate:[AuthguardGuard]},
  {path:"login",component:LoginComponent},
  { path:"edit/:id",component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
