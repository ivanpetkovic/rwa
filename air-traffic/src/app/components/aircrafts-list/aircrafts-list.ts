import { Component, signal } from '@angular/core';
import { Aircraft } from '../../models/aircraft.model';
import { AircraftProfile } from '../aircraft-profile/aircraft-profile';

@Component({
  selector: 'app-aircrafts-list',
  imports: [AircraftProfile],
  templateUrl: './aircrafts-list.html',
  styleUrl: './aircrafts-list.css',
})
export class AircraftsList {
  aircrafts = signal<Aircraft[]>([
    {
      id: 'RS2',
      aircraftType: 'Airbus 320',
      attitude: 0,
      speed: 20
    },
    {
      id: 'US1',
      aircraftType: 'Boeing 747',
      attitude: 10500,
      speed: 840
    }
  ]);
}
