import { timer, forkJoin, zip, interval, from, combineLatest, merge } from "rxjs";
import { map, take } from "rxjs/operators";

// kombinacioni operatori

const firstObservable$ = interval(500).pipe(
  map((x) => "prvi " + x),
  take(8)
);

const secondObservable$ = interval(1500).pipe(
  map((x) => "drugi " + x),
  take(6)
);

/*
 forkJoin
    - emituje zadnju vrednost iz svakog toka, posto se SVE kompletiraju
 combineLatest 
    - ne krece da emituje sve dok svaki tok ne emiture bar jednu vrednost. 
    - emituje poslednje vrednost SVIH tokova cim BILO KOJI tok emituje
 zip 
    - ne krece da emituje sve dok svaki tok ne emiture bar jednu vrednost. 
    - emituje vrednosti SVIH tokova kad SVAKI tok emituje 
merge
    - spaja tokove u jedan tok, 
    - emituje JEDNU vrednost pri svakom emitu BILO KOG toka

 */

// forkJoin([firstObservable$, secondObservable$]).subscribe((x) =>
//   console.log("fork " + x)
// );

// cekaju se tokovi
zip(firstObservable$, secondObservable$).subscribe((x) =>
  console.log("zip " + x)
);

// emituje cim bar jedan tok emituje
// combineLatest([firstObservable$, secondObservable$]).subscribe((x) =>
//   console.log("combineLatest " + x)
// );

// spaja tokove u jedan tok, emituje JEDNU vrednost pri svakom emitu BILO KOG toka
// merge(firstObservable$, secondObservable$).subscribe((x) =>
//   console.log("merge " + x)
// );



function startujZipPrimer() {
  const timer$ = interval(150);
  const number$ = from([1, 5, 7, 8, 4, 3]);

  //wait until all observables have emitted a value then emit all as an array
  zip([timer$, number$])
    .pipe(
      // map((time, number) => time + ", " + number)
      map((time, number) => {
        console.log("sdsd");
        return time + ", " + number;
      })
    )
    .subscribe((x) => console.log(x));
}

//startujZipPrimer();