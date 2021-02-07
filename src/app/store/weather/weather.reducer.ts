import { stagger, state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';

import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import {
    getCurrentWeatherRequestStarted,
    getCurrentWeatherRequestSuccess,
    updateSearchLocation,
} from './weather.actions';
import { WeatherState } from './weather.state';

export const initialState: WeatherState = {
    isLoading: false,
    location: '',
    currentWeather: null,
};

export const weatherReducer = createReducer(
    initialState,
    on(getCurrentWeatherRequestStarted, state => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(getCurrentWeatherRequestSuccess, (state, { currentWeather }) => {
        return {
            ...state,
            currentWeather,
            isLoading: false,
        };
    }),
    on(updateSearchLocation, (state, { location }) => {
        return {
            ...state,
            location,
        };
    }),
);
