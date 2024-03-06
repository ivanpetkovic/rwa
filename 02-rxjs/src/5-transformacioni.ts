import { from } from "rxjs";
import { filter, map, pairwise, scan } from "rxjs/operators";

// sum positive numbers in time
// bonus: generate numbers from text box and button click

// scan drzi vrednost iz prethodne iteracije. Kao reduce za stream

const numbers$ = from([1, -3, 3, -4, 5, 6, -7]);
numbers$
  .pipe(
    filter((x) => x > 0),
    scan((acc, val) => {
      return acc + val;
    })
  )
  .subscribe((x) => console.log(x));

  
// detektuj dva uzastopna ista broja

from([1, 3, 4, 5, 5, 6, 7, 7])
.pipe(
  pairwise(), // uzima i vrednost iz prethodne iteracije
  filter((pair) => pair[0] === pair[1]),
  map((pair) => pair[0])
)
.subscribe((x) => console.log(x));
