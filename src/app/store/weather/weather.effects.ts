import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import { WeatherService } from 'src/app/services/weather.service'
import { getCurrentWeatherRequestStarted, getCurrentWeatherRequestSuccess } from './weather.actions';
 
@Injectable()
export class WeatherEffects {
 
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  getCurrentWeather$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentWeatherRequestStarted.type),
    mergeMap(() => this.weatherService.getCurrentWeather()
        .pipe(
            map((payload: CurrentWeather) => {
            return getCurrentWeatherRequestSuccess({ currentWeather: payload });
            }),
            catchError((error: Error) => {
                return EMPTY;
            })
        ))
    )
  );
}