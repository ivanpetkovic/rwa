import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../../store/counter.reducer';
import { decrease, increase } from "../../store/counter.actions";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  // counter = signal(0);
  private readonly store: Store<{counter: CounterState}> = inject(Store);
  // preko signala
  counter = this.store.selectSignal(state => state.counter.current);
  // preko rxjs-a (title je Observable, mora da se koristi async pipe u hmtl-u)
  // videti imports, gde je dodat AsyncPipe
  title = this.store.select(state => state.counter.title);

  ngOnInit(): void {
  }

  inc() {
    this.store.dispatch(increase());
  }
  dec() {
    this.store.dispatch(decrease());
  }
}
