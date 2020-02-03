import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//Material Design Bootstrap module
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    
  ],
  exports:[
    LoginComponent
  ]
})
export class UserModule { }
