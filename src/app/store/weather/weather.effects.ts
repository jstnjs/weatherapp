import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, delay, withLatestFrom } from 'rxjs/operators';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import { WeatherService } from 'src/app/services/weather.service';
import {
  getCurrentWeatherRequestStarted,
  getCurrentWeatherRequestSuccess,
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
          delay(5000),
          map((payload: CurrentWeather) => {
            return getCurrentWeatherRequestSuccess({ currentWeather: payload });
          }),
          catchError((error: Error) => {
            return EMPTY;
          })
        )
      )
    )
  );
}
