import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MoviesListComponent, MovieDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
