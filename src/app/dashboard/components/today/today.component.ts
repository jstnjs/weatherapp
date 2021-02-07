import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from 'src/app/interfaces/weather/weather';
import { getCurrentWeatherRequestStarted } from 'src/app/store/weather/weather.actions';
import { getCurrentWeather, isLoading, getError } from 'src/app/store/weather/weather.selectors';
import { WeatherState } from 'src/app/store/weather/weather.state';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  currentWeather$: Observable<Weather>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<{ state: WeatherState}>) {
    this.currentWeather$ = store.pipe(select(getCurrentWeather));
    this.isLoading$ = store.pipe(select(isLoading));
    this.error$ = store.pipe(select(getError));
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeatherRequestStarted());
  }
}
