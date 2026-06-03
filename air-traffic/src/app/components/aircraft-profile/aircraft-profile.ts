import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-aircraft-profile',
  imports: [],
  templateUrl: './aircraft-profile.html',
  styleUrl: './aircraft-profile.css',
})
export class AircraftProfile {
  aircraftId = input('XYZ');
  aircraftType = input('UFO');
  speed = input(0);
  attitude = input(0);
}
