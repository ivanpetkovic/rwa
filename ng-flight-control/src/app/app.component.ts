import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./components/title/title.component";
import { MapComponent } from "./components/map/map.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-app-test';
}
