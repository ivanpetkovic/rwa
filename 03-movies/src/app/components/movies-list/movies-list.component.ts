import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  // public movies: Observable<Movie[]> = of([]);
  public movies: Movie[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    // this.movies = this.service.getMovies();
    this.service.getMovies().subscribe((movies) => (this.movies = movies));
  }
}
