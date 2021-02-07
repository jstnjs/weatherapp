import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  delay,
  withLatestFrom,
} from 'rxjs/operators';
import { ForecastResponse } from 'src/app/interfaces/responses/forecast-response';
import { Weather } from 'src/app/interfaces/weather/weather';
import { WeatherService } from 'src/app/services/weather.service';
import {
  getCurrentWeatherRequestFailed,
  getCurrentWeatherRequestStarted,
  getCurrentWeatherRequestSuccess,
  getForecastRequestFailed,
  getForecastRequestStarted,
  getForecastRequestSuccess,
} from './weather.actions';
import { getLocation } from './weather.selectors';
import { WeatherState } from './weather.state';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private store: Store<WeatherState>,
    private weatherService: WeatherService
  ) {}

  getCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentWeatherRequestStarted.type),
      withLatestFrom(this.store.select(getLocation)),
      mergeMap(([action, location]) =>
        this.weatherService.getCurrentWeather(location).pipe(
          delay(1000),
          map((payload: Weather) => {
            return getCurrentWeatherRequestSuccess({ currentWeather: payload });
          }),
          catchError(() => {
            return of(getCurrentWeatherRequestFailed());
          })
        )
      )
    )
  );

  getForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getForecastRequestStarted.type),
      withLatestFrom(this.store.select(getLocation)),
      mergeMap(([action, location]) =>
        this.weatherService.getForecast(location).pipe(
          delay(1000),
          map((payload: ForecastResponse) => {
            return getForecastRequestSuccess({ forecast: payload.list });
          }),
          catchError(() => {
            return of(getForecastRequestFailed());
          })
        )
      )
    )
  );
}
