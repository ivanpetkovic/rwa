import { range, interval, Observable, Subscription } from "rxjs";
import { filter, map, take, takeUntil } from "rxjs/operators";

function execRange(): Subscription {
  return range(1, 100)
    .pipe(
      filter((x) => x % 2 === 0),
      map((x) => x + 1),
    )
    .subscribe((x) => console.log(x));
}

function execInterval(): Subscription {
  return interval(500)
    .pipe(
      map((x) => x * x),
      take(20),
    )
    .subscribe((x) => console.log(x));
}

function execCreate(): Subscription {
  // cold Observable
  // cold vs hot (netflix vs bioskop)
  const sub = new Observable((generator) => {
    setInterval(() => {
      generator.next(Math.round(Math.random() * 6));
    }, 500);
  }).subscribe((x) => console.log(x));
  return sub;
}

function createUnsubscribeButton(subscription: Subscription) {
  const button = document.createElement("button");
  document.body.appendChild(button);
  button.innerHTML = "Stop!";
  button.onclick = () => subscription.unsubscribe();
}

//execInterval();
// const sub = execInterval();
const sub = execCreate();
createUnsubscribeButton(sub);
