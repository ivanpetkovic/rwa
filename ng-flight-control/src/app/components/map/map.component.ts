import { Component, OnInit } from '@angular/core';
import { AircraftComponent } from "../aircraft/aircraft.component";
import { CommonModule, NgFor } from '@angular/common';
import {Aircraft} from "../../models/aircraft";
import { AirportsService } from '../../services/airports.service';
import { Airport } from '../../models/airport';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { loadAircrafts, setAircrafts } from '../../store/aircraft.actions';

@Component({
  selector: 'app-map',
  imports: [AircraftComponent, CommonModule, NgFor],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{

  aircrafts$: Observable<Aircraft[]> = new Observable();

  constructor(private store: Store<AppState> ) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadAircrafts());
    this.aircrafts$ = this.store.select(state => state.aircrafts.aircrafts);
  }
  airports: Airport[] = [];

}
