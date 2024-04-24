import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { selectMovie } from 'src/app/store/movie.actions';
import { MovieState } from 'src/app/store/movie.reducer';
import { selectAllMovies } from 'src/app/store/movie.selector';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  // public movie$: Observable<Movie[]> = of([]);
  public movies: Movie[] = [];

  // @Output()
  // public selektovan: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAllMovies).subscribe((list: Movie[]) => {
      this.movies = list;
    });
  }

  onSelect(movieId: string) {
    this.store.dispatch(selectMovie({ movieId: movieId }));
  }
}
