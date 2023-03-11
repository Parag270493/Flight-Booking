import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { FormsComponent } from './forms/forms.component';

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
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
