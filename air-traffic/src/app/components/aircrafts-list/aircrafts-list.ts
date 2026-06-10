import { Component, inject, OnInit, signal } from '@angular/core';
import { Aircraft } from '../../models/aircraft.model';
import { AircraftProfile } from '../aircraft-profile/aircraft-profile';
import { Store } from '@ngrx/store';
import { loadAircrafts } from '../../store/aircraft.actions';
import { selectAllAircrafts } from '../../store/aircraft.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-aircrafts-list',
  imports: [AircraftProfile, AsyncPipe],
  templateUrl: './aircrafts-list.html',
  styleUrl: './aircrafts-list.css',
})
export class AircraftsList implements OnInit {
  private store = inject(Store);

  list$ = this.store.select(selectAllAircrafts);

  aircrafts = signal<Aircraft[]>([
    {
      id: 'RS2',
      aircraftType: 'Airbus 320',
      attitude: 0,
      speed: 20,
    },
    {
      id: 'US1',
      aircraftType: 'Boeing 747',
      attitude: 10500,
      speed: 840,
    },
  ]);

  ngOnInit(): void {
    this.store.dispatch(loadAircrafts({ page: 0, size: 100 }));
  }
}
