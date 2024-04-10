import { Component } from '@angular/core';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '03-movies';
  selectedMovie?: Movie;

  onMovieSelected(movie: Movie) {
    console.log('Iz app komponente, ', movie);
    this.selectedMovie = movie;
  }
}
