import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Movie } from 'src/app/models/movie';
import { selectCurrentMovie } from 'src/app/store/movie.selector';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  film?: Movie;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(selectCurrentMovie)
      .subscribe((movie?: Movie) => (this.film = movie));
  }
}
