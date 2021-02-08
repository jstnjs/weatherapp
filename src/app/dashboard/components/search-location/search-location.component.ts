import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateSearchLocation } from 'src/app/store/weather/weather.actions';
import { getLocation } from 'src/app/store/weather/weather.selectors';
import { WeatherState } from 'src/app/store/weather/weather.state';

@Component({
    selector: 'app-search-location',
    templateUrl: './search-location.component.html',
    styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements OnInit {
    @Output() submitLocation = new EventEmitter<void>();
    location$: Observable<string>;

    constructor(private store: Store<{ state: WeatherState }>) {
        this.location$ = store.select(getLocation);
    }

    ngOnInit(): void {}

    onInput(location: string): void {
        this.store.dispatch(updateSearchLocation({ location }));
    }

    onSubmit(): void {
        this.submitLocation.emit();
    }
}
