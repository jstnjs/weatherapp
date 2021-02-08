import { Weather } from 'src/app/interfaces/weather/weather';

export interface WeatherState {
    isLoading: boolean;
    error: string | null;
    location: string;
    forecast: Weather[];
    currentWeather: Weather;
}
