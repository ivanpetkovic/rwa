import { MovieState } from './store/movie.reducer';

export interface AppState {
  movies: MovieState;
  // user: UserState
}
