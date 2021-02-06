import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';


export enum WeatherActionsTypes {
    getCurrentWeatherRequestStarted = '[Weather API] GET_CURRENT_WEATHER_REQUEST_STARTED',
    getCurrentWeatherRequestSuccess = '[Weather API] GET_CURRENT_WEATHER_REQUEST_SUCCESS',
}

export const getCurrentWeatherRequestStarted = createAction(
  WeatherActionsTypes.getCurrentWeatherRequestStarted,
);

export const getCurrentWeatherRequestSuccess = createAction(
  WeatherActionsTypes.getCurrentWeatherRequestSuccess,
  props<{ currentWeather: CurrentWeather }>()
);
