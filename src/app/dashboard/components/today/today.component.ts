import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import { getCurrentWeatherRequestStarted } from 'src/app/store/weather/weather.actions';
import { getCurrentWeather, isLoading } from 'src/app/store/weather/weather.selectors';
import { WeatherState } from 'src/app/store/weather/weather.state';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  currentWeather$: Observable<CurrentWeather>;
  currentWeather: CurrentWeather = <CurrentWeather>{};
  isLoading: Observable<boolean>;

  constructor(private store: Store<{ state: WeatherState}>) {
    this.currentWeather$ = store.pipe(select(getCurrentWeather));
    this.isLoading = this.store.pipe(select(isLoading));    
    
    this.currentWeather$.subscribe( currentWeather => {
      this.currentWeather = currentWeather;
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeatherRequestStarted());
  }
}
