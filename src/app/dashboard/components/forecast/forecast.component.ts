import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/interfaces/weather/weather';
import { getForecastRequestStarted } from 'src/app/store/weather/weather.actions';
import {
    getError,
    getForecast,
    isLoading,
} from 'src/app/store/weather/weather.selectors';
import { WeatherState } from 'src/app/store/weather/weather.state';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
    forecast$: Observable<Weather[]>;
    isLoading$: Observable<boolean>;
    error$: Observable<string>;
    selectedForecast: Weather;

    constructor(private store: Store<{ state: WeatherState }>) {
        this.forecast$ = store.pipe(select(getForecast));
        this.isLoading$ = store.pipe(select(isLoading));
        this.error$ = store.pipe(select(getError));

        this.selectedForecast = this.forecast$[0];
    }

    ngOnInit(): void {
        this.store.dispatch(getForecastRequestStarted());
    }

    onSelect(foreCast: Weather): void {
        this.selectedForecast = foreCast;
    }
}
