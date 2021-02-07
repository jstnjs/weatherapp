import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { WeatherStoreModule } from './store/weather/weather.store.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './dashboard/components/forecast/forecast.component';
import { TodayComponent } from './dashboard/components/today/today.component';
import { SearchLocationComponent } from './dashboard/components/search-location/search-location.component';
import { FormsModule } from '@angular/forms';
import { WeatherDetailsComponent } from './dashboard/components/weather-details/weather-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForecastComponent,
    TodayComponent,
    SearchLocationComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    WeatherStoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
