import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieState } from 'src/app/store/movie.reducer';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  // public movie$: Observable<Movie[]> = of([]);
  public movies: Movie[] = [];

  @Output()
  public selektovan: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(
    private service: MoviesService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.select('movies').subscribe((slice: MovieState) => {
      console.log(slice);
      // this.movies = slice.moviesList;
    });
    // this.movie$ = this.service.getMovies();
    // this.service.getMovies().subscribe((movies) => (this.movies = movies));
  }

  onSelect(movieId: string) {
    this.service.getMovie(movieId).subscribe((movie) => {
      this.selektovan.emit(movie);
    });
  }
}
