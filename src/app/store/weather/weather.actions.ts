import { createAction, props } from '@ngrx/store';
import { Weather } from 'src/app/interfaces/weather/weather';

export enum WeatherActionsTypes {
    getCurrentWeatherRequestStarted = '[Weather API] GET_CURRENT_WEATHER_REQUEST_STARTED',
    getCurrentWeatherRequestSuccess = '[Weather API] GET_CURRENT_WEATHER_REQUEST_SUCCESS',
    getCurrentWeatherRequestFailed = '[Weather API] GET_CURRENT_WEATHER_REQUEST_FAILED',
    getForecastRequestStarted = '[Weather API] GET_FORECAST_REQUEST_STARTED',
    getForecastRequestSuccess = '[Weather API] GET_FORECAST_REQUEST_SUCCESS',
    getForecastRequestFailed = '[Weather API] GET_FORECAST_REQUEST_FAILED',
    updateSearchLocation = '[Search Location Component] UPDATE_SEARCH_LOCATION',
}

export const getCurrentWeatherRequestStarted = createAction(
    WeatherActionsTypes.getCurrentWeatherRequestStarted
);

export const getCurrentWeatherRequestSuccess = createAction(
    WeatherActionsTypes.getCurrentWeatherRequestSuccess,
    props<{ currentWeather: Weather }>()
);

export const getCurrentWeatherRequestFailed = createAction(
    WeatherActionsTypes.getCurrentWeatherRequestFailed
);

export const getForecastRequestStarted = createAction(
    WeatherActionsTypes.getForecastRequestStarted
);

export const getForecastRequestSuccess = createAction(
    WeatherActionsTypes.getForecastRequestSuccess,
    props<{ forecast: Weather[] }>()
);

export const getForecastRequestFailed = createAction(
    WeatherActionsTypes.getForecastRequestFailed
);

export const updateSearchLocation = createAction(
    WeatherActionsTypes.updateSearchLocation,
    props<{ location: string }>()
);
