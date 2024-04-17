import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './models/movie';
import { addMovies } from './store/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '03-movies';

  constructor(private store: Store) {}

  ngOnInit() {
    const movies = [
      { id: 'rambo', title: 'Rambo 1', year: 1980, score: 8 },
      { id: 'rocky', title: 'Rocky 1', year: 1984, score: 9 },
      { id: 'topgun', title: 'Top Gun', year: 1980, score: 7 },
      { id: 'matrix', title: 'Matrix', year: 2000, score: 10 },
      { id: 'rockrolla', title: 'Rocknrolla', year: 2010, score: 7 },
      { id: 'et', title: 'ET', year: 1983, score: 8 },
    ];
    this.store.dispatch(addMovies({ list: movies }));
  }
}
