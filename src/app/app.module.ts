import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RoutingModule
import { AppRoutingModule } from './app-routing.module';

//Modules
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapComponent } from './google-map/google-map.component';
import { NgbdNavSelectionComponent } from './core/nav-selection/nav-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    NgbdNavSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
