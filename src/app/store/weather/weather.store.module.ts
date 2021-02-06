import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { weatherReducer } from "src/app/store/weather/weather.reducer"
import { WeatherEffects } from "./weather.effects";

@NgModule({
    imports: [
      StoreModule.forFeature('weather', weatherReducer),
      EffectsModule.forFeature([WeatherEffects]),
    ],
    exports: [],
    declarations: [],
    providers: [],
  })
  export class WeatherStoreModule {}