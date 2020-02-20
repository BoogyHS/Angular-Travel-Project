import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards
import { AuthGuard } from './auth.guard';

//Components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './travel/dashboard/dashboard.component';
import { DetailsComponent } from './travel/details/details.component';
import { GoogleMapComponent } from './travel/google-map/google-map.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:country', component: DetailsComponent },
  { path: 'map', component: GoogleMapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addtravel', component: AddTravelComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
