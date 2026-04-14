import { Component, input } from '@angular/core';

@Component({
  selector: 'app-aircraft-profile',
  imports: [],
  templateUrl: './aircraft-profile.html',
  styleUrl: './aircraft-profile.css',
})
export class AircraftProfile {

  name = input<string>("UFO");
  speed = input<number>(0);

}
