import { Clouds } from "../weather/clouds";
import { Coordinates } from "../weather/coordinates";
import { Main } from "../weather/main";
import { Sys } from "../weather/sys";
import { Weather } from "../weather/weather";
import { WeatherCondition } from "../weather/weather-condition";
import { Wind } from "../weather/wind";

export interface CurrentWeatherResponse {
    coord: Coordinates;
    weather: WeatherCondition[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}
