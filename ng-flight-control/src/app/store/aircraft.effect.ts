import { inject, Injectable } from "@angular/core";
import { AircraftsService } from "../services/aircrafts.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadAircrafts, setAircrafts } from "./aircraft.actions";
import { map, switchMap } from "rxjs";

@Injectable()
export class AircraftsEffect {
  private actions$ = inject(Actions);
  private service = inject(AircraftsService); 

        loadAircrafts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadAircrafts),
            switchMap( () => this.service.getAll().pipe(
                map(aircrafts => setAircrafts({aircrafts: aircrafts}))
            ))
        )

    )

    
};