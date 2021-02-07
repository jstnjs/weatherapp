import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/interfaces/weather/current-weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weatherDetail: CurrentWeather;

  constructor() { }

  ngOnInit(): void {
  }
}
