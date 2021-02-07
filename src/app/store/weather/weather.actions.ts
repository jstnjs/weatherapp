import { createAction, props } from '@ngrx/store';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';

export enum WeatherActionsTypes {
  getCurrentWeatherRequestStarted = '[Weather API] GET_CURRENT_WEATHER_REQUEST_STARTED',
  getCurrentWeatherRequestSuccess = '[Weather API] GET_CURRENT_WEATHER_REQUEST_SUCCESS',
  updateSearchLocation = '[Search Location Component] UPDATE_SEARCH_LOCATION',
}

export const getCurrentWeatherRequestStarted = createAction(
  WeatherActionsTypes.getCurrentWeatherRequestStarted
);

export const getCurrentWeatherRequestSuccess = createAction(
  WeatherActionsTypes.getCurrentWeatherRequestSuccess,
  props<{ currentWeather: CurrentWeather }>()
);

export const updateSearchLocation = createAction(
  WeatherActionsTypes.updateSearchLocation,
  props<{ location: string }>()
);
