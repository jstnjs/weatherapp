import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './dashboard/components/forecast/forecast.component';
import { TodayComponent } from './dashboard/components/today/today.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'today', pathMatch: 'full'  },
      { path: 'today', component: TodayComponent },
      { path: 'forecast', component: ForecastComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
