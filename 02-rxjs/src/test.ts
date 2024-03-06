import { interval, forkJoin, timer, from, zip } from "rxjs";
import { map, pairwise, filter, scan } from "rxjs/operators";


const $niz = from([1, 4, 6, 6, 7, 9, 9, 0]);
const $timer = interval(500);
zip($niz, $timer)
.pipe(
    pairwise(),
    filter(pair => {
        const lastState = pair[0];
        const currentState = pair[1];
        return lastState[0] === currentState[0]
    }),
    map(pair => pair[0][0]),
    scan((acc, value) => acc + value)
)
.subscribe(x => console.log(x));
