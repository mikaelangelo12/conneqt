import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ConfirmSignComponent } from './sign/confirm-sign/confirm-sign.component';



@NgModule({
  declarations: [
    SignComponent,
    LoginComponent,
    ConfirmSignComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SignComponent,
    LoginComponent
  ]
})
export class LoginModule { }
