import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ForecastResponse } from '../interfaces/responses/forecast-response';

import { Weather } from '../interfaces/weather/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `${environment.weatherApiUrl}/weather?q=${
        city ? city : 'Amsterdam'
      }&units=metric&lang=nl&appid=${environment.weatherApiKey}`
    );
  }

  getForecast(city: string): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(
      `${environment.weatherApiUrl}/forecast?q=${
        city ? city : 'Amsterdam'
      }&cnt=5&units=metric&lang=nl&appid=${environment.weatherApiKey}`
    );
  }
}
