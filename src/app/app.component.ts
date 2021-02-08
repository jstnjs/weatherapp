import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { getCurrentWeatherRequestStarted } from './store/weather/weather.actions';
import { WeatherState } from './store/weather/weather.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'weatherapp';
}
