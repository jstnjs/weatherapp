import { Clouds } from "./clouds"
import { Coordinates } from "./coordinates";
import { Main } from "./main";
import { Sys } from "./sys";
import { Weather } from "./weather";
import { Wind } from "./wind";

// @todo: might rename to CurrentWeatherResponse
export interface CurrentWeather {
    coord: Coordinates;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
