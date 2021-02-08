import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    getCurrentWeatherRequestStarted,
    getForecastRequestStarted,
} from '../store/weather/weather.actions';
import { WeatherState } from '../store/weather/weather.state';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private store: Store<{ state: WeatherState }>) {}

    ngOnInit(): void {}

    submittedLocation(): void {
        this.store.dispatch(getCurrentWeatherRequestStarted());
        this.store.dispatch(getForecastRequestStarted());
    }
}
