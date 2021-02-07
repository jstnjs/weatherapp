import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { CurrentWeather } from '../interfaces/weather/current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<CurrentWeather> {

    return this.http.get<CurrentWeather>(`${environment.weatherApiUrl}/weather?q=${city ? city : 'Amsterdam'}&units=metric&lang=nl&appid=${environment.weatherApiKey}`);
  }
}