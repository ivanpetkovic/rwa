import { interval, Observable, Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";


function execIntervalUntil(observable$: Observable<any>) {
  interval(500).pipe(
    takeUntil(observable$)
  ).subscribe(x => console.log("working, " + x));
}

function stopEmitWithDelay(observable$: Subject<any>) {
  setTimeout(() => {
    observable$.next();
    observable$.complete();
  }, 3000);
}

function subscribeToSubject(): Subject<any> {
  const subject$ = new Subject(); 
  subject$.subscribe(x => console.log(`control subject, ${x}`));
  subject$.next(1);
  subject$.next(2);
  return subject$;
}

function createUnsubscribeButton(action: Function) {
  const button = document.createElement("button");
  document.body.appendChild(button);
  button.innerHTML = "Stop!";
  button.onclick = () => {
    action();
    button.disabled = true;
  }
}

// Subject ~= Event emitter 
// Every Subject is an Observable and an Observer. You can subscribe to a Subject, 
// and you can call next to feed values as well as error and complete.

const subject$ = subscribeToSubject();
execIntervalUntil(subject$);
createUnsubscribeButton( () =>  stopEmitWithDelay(subject$));
