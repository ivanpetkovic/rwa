import { Component, signal } from '@angular/core';
import { Aircraft } from '../../models/aircraft.model';

@Component({
  selector: 'app-aircrafts-list',
  imports: [],
  templateUrl: './aircrafts-list.html',
  styleUrl: './aircrafts-list.css',
})
export class AircraftsList {

  aircrafts = signal<Aircraft[]>([
    {
      aircraftId: "US1",
      name: "Boeing 777",
      speed: 500,
      attitude: 10000
    }, 
    {
      aircraftId: "RS2",
      name: "Boeing 737",
      speed: 0,
      attitude: 0
    }, 
  ]);

  constructor() {
    // this.list.update()
  }
}
