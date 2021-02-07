import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.state';

export const getWeatherState = createFeatureSelector<WeatherState>('weather');

export const getCurrentWeather = createSelector(
  getWeatherState,
  (state) => state.currentWeather
);

export const getLocation = createSelector(
  getWeatherState,
  (state) => state.location
);

export const isLoading = createSelector(
  getWeatherState,
  (state) => state.isLoading
);

export const getError = createSelector(
  getWeatherState, 
  (state) => state.error
);
