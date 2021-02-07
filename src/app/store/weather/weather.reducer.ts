import { stagger, state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';

import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';
import {
    getCurrentWeatherRequestStarted,
    getCurrentWeatherRequestSuccess,
} from './weather.actions';
import { WeatherState } from './weather.state';

export const initialState: WeatherState = {
    isLoading: false,
    location: 'Amsterdam',
    currentWeather: {
        coord: {
            lat: 0,
            lon: 0,
        },
        weather: [],
        base: 'string',
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        wind: {
            speed: 0,
            deg: 0,
        },
        clouds: {
            all: 0,
        },
        dt: 0,
        sys: {
            type: 0,
            id: 0,
            country: 'string',
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: 'string',
        cod: 0,
    },
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
    })
);
