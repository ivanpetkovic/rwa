import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent {
  @Input()
  public film?: Movie;

  @Output()
  public selektovan: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.film = new Movie('lotr', 'Lord of the Rings', 2000, 9);
  }

  onClick(ev: Event) {
    // console.log(ev);
    if (this.film) {
      this.selektovan.emit(this.film.id);
    }
  }
}
