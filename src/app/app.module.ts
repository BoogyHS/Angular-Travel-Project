import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Modules
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

//Kinvey
import { KinveyModule } from 'kinvey-angular-sdk';

//Services
import { CountriesService } from './services/countries.service';
import { UsersService } from './services/users.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    CountryComponent,
    GoogleMapComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    KinveyModule.init({
      appKey: 'kid_H1S5b0p-I',
      appSecret: '1ce36659a9c2470784ed80c9b31e8b6c'
    })
  ],
  providers: [CountriesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
