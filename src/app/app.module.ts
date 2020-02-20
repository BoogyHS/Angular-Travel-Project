import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Kinvey
import { KinveyModule } from 'kinvey-angular-sdk';

//Modules
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { TravelModule } from './travel/travel.module';

//Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AddTravelComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    TravelModule,
    ShareModule,
    AuthenticationModule,
    HttpClientModule,
    KinveyModule.init({
      appKey: 'kid_H1S5b0p-I',
      appSecret: '1ce36659a9c2470784ed80c9b31e8b6c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
