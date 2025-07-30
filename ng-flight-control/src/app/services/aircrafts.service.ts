import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../models/aircraft';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  API_URL: string = "http://localhost:3000"; // ovo ide u env fajl
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(`${this.API_URL}/aircrafts`);
  }
}
