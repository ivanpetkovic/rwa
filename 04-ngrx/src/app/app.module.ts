import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { movieReducer } from './store/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffect } from './store/movie.effect';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MoviePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: movieReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 125 }),
    EffectsModule.forRoot(MoviesEffect),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
