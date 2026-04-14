import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AircraftProfile } from "./components/aircraft-profile/aircraft-profile";
import { AircraftsList } from "./components/aircrafts-list/aircrafts-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AircraftProfile, AircraftsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-air-traffic');
}
