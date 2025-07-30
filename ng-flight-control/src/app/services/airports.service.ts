import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Airport } from '../models/airport';

@Injectable({
  providedIn: 'root'
})

export class AirportsService {

  API_URL: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${this.API_URL}/airports`);
  }
}
