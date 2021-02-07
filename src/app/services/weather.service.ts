import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrentWeatherResponse } from '../interfaces/responses/current-weather-response';
import { ForecastResponse } from '../interfaces/responses/forecast-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<CurrentWeatherResponse> {
    return this.http.get<CurrentWeatherResponse>(
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
