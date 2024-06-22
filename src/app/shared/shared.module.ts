import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../Login/login.module';
import { UserModule } from '../User/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    UserModule
  ]
})
export class SharedModule { }
