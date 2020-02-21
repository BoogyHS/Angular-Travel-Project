import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { DetailsComponent } from './details/details.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsComponent,
    GoogleMapComponent,
    DashboardComponent,
    CountryComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ShareModule,
    ReactiveFormsModule
  ],
  exports: [
    DetailsComponent,
    GoogleMapComponent,
    DashboardComponent,
    CountryComponent,
  ]
})
export class TravelModule { }
