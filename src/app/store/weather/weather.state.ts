import { CurrentWeather } from "src/app/interfaces/weather/current-weather";

export interface WeatherState {
    isLoading: boolean;
    location: string;
    // ForeCast: number;
    currentWeather: CurrentWeather;
    
}
