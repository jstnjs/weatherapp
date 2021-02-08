import { Clouds } from './clouds';
import { Main } from './main';
import { WeatherCondition } from './weather-condition';
import { Wind } from './wind';

export interface Weather {
    weather: WeatherCondition[];
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
}
