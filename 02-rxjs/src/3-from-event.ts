import { fromEvent } from "rxjs";
import {
  debounceTime,
  filter,
  map,
  sampleTime,
  switchMap,
} from "rxjs/operators";

function logMouseMove() {
  fromEvent(document, "mousemove")
    .pipe(
      sampleTime(1000),
      map((ev: MouseEvent) => ({ x: ev.screenX, y: ev.screenY }))
    )
    .subscribe((coords) => console.log(coords));
}

function createTitleInputElement() {
  const input = document.createElement("input");
  document.body.appendChild(input);
  fromEvent(input, "input")
    .pipe(
      debounceTime(500),
      map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
      filter((text) => text.length >= 3)
    )
    .subscribe((movies) => console.log(movies));
}

// logMouseMove();
createTitleInputElement();
