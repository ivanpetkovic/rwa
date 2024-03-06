import { fromEvent, from } from "rxjs";
import {
  debounceTime,
  map,
  filter,
  switchMap,
  catchError,
  repeat,
} from "rxjs/operators";

const URL = "http://localhost:3000/movies/";

const input = document.createElement("input");
document.body.appendChild(input);

function getMovie(title: string) {
  return from(
    fetch(URL + title)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        } else {
          return response.json();
        }
      })
      .catch((err) => console.log(`Error `, err))
  );
}

fromEvent(input, "input")
  .pipe(
    debounceTime(500),
    map((ev: InputEvent) => (<HTMLInputElement>ev.target).value),
    filter((text) => text.length >= 3),
    // repeat(3),
    switchMap((text) => getMovie(text))
  )
  .subscribe((movies) => console.log(movies));
