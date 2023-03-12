import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { FormsComponent } from './forms/forms.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:FlightPageComponent
  },
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
