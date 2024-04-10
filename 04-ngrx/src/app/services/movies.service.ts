import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Movie } from '../models/movie';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies2(): Observable<Movie[]> {
    const movies: Movie[] = [
      new Movie('rambo', 'Rambo 1', 1980, 8),
      new Movie('rocky', 'Rocky', 1984, 9),
      new Movie('topgun', 'Top Gun', 1986, 7),
      new Movie('goonies', 'Goonie', 1980, 7.3),
      new Movie('et', 'E.T.', 1980, 8.5),
    ];
    return of(movies);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_URL + '/movies');
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(API_URL + '/movies/' + movieId);
  }
}
