import { WeatherForecastComponent } from './weatherForecast/weatherForecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'fiveDayForecast',
    component: WeatherForecastComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/fiveDayForecast',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
