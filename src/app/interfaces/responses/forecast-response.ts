import { City } from "../weather/city";
import { Weather } from "../weather/weather";

export interface ForecastResponse {
    cod: number;
    message: number;
    count: number;
    list: Weather[];
    city: City;
}
