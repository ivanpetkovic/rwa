import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AircraftsEffects } from './aircrafts.effects';

describe('AircraftsEffects', () => {
  let actions$: Observable<any>;
  let effects: AircraftsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AircraftsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(AircraftsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
