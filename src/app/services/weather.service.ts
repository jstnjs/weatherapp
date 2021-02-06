import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CurrentWeather } from '../interfaces/weather/current-weather';

@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {
    constructor (private http: HttpClient) {}
  
    getCurrentWeather(): Observable<CurrentWeather> {
      return this.http.get<CurrentWeather>('https://api.openweathermap.org/data/2.5/weather?q=Zwolle&units=metric&lang=nl&appid=dbca293a1be0f045638b500869f34c98');
    }
  }