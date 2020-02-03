import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//Material Design Bootstrap module
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
