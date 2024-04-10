import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  public movie$: Observable<Movie[]> = of([]);

  @Output()
  public selektovan: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.movie$ = this.service.getMovies();
    // this.service.getMovies().subscribe((movies) => (this.movies = movies));
  }

  onSelect(movieId: string) {
    this.service.getMovie(movieId).subscribe((movie) => {
      this.selektovan.emit(movie);
    });
  }
}
