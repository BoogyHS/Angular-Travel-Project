import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

//Components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './travel/dashboard/dashboard.component';
import { DetailsComponent } from './travel/details/details.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardResolverService } from './travel/dashboard-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], resolve: {
    list: DashboardResolverService,
  }, },
  { path: 'details/:country', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, data: {
    isLogged: false
  } },
  { path: 'addtravel', component: AddTravelComponent, canActivate: [AdminGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
