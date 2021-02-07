import { createReducer, on, Action } from '@ngrx/store';
import {
    getCurrentWeatherRequestFailed,
    getCurrentWeatherRequestStarted,
    getCurrentWeatherRequestSuccess,
    getForecastRequestFailed,
    getForecastRequestStarted,
    getForecastRequestSuccess,
    updateSearchLocation,
} from './weather.actions';
import { WeatherState } from './weather.state';

export const initialState: WeatherState = {
    isLoading: false,
    error: null,
    location: '',
    currentWeather: null,
    forecast: [],
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
            error: null,
        };
    }),
    on(getCurrentWeatherRequestFailed, (state) => {
        return {
            ...state,
            isLoading: false,
            error: 'Er is iets misgegaan, probeer het later opnieuw!',
        };
    }),
    on(getForecastRequestStarted, state => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(getForecastRequestSuccess, (state, { forecast }) => {
        return {
            ...state,
            forecast,
            isLoading: false,
            error: null,
        };
    }),
    on(getForecastRequestFailed, (state) => {
        return {
            ...state,
            isLoading: false,
            error: 'Er is iets misgegaan, probeer het later opnieuw!',
        };
    }),     
    on(updateSearchLocation, (state, { location }) => {
        return {
            ...state,
            location,
        };
    }),
);
