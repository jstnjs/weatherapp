import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import { getCurrentWeatherRequestStarted } from 'src/app/store/weather/weather.actions';
import { getCurrentWeather, isLoading, getLocation } from 'src/app/store/weather/weather.selectors';
import { WeatherState } from 'src/app/store/weather/weather.state';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  currentWeather$: Observable<CurrentWeather>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<{ state: WeatherState}>) {
    this.currentWeather$ = store.pipe(select(getCurrentWeather));
    this.isLoading$ = store.pipe(select(isLoading));
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeatherRequestStarted());
  }
}
