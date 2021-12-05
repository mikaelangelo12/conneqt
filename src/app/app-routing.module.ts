import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login/login.component';
import { SignComponent } from './views/login/sign/sign.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'sign', component: SignComponent
  },
  {
  path: 'login', component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
