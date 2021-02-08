import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather/weather';

@Component({
    selector: 'app-weather-details',
    templateUrl: './weather-details.component.html',
    styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent implements OnInit {
    @Input() weatherDetail: Weather;

    constructor() {}

    ngOnInit(): void {}
}
