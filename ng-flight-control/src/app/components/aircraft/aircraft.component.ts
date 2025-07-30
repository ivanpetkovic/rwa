import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aircraft } from '../../models/aircraft';

@Component({
  selector: 'app-aircraft',
  imports: [],
  templateUrl: './aircraft.component.html',
  styleUrl: './aircraft.component.scss'
})
export class AircraftComponent {
@Input() aircraft?: Aircraft;
@Output() click = new EventEmitter<string>();

onSelected() {
  console.log(this.aircraft);
}
}
