import { getRandomNumber } from "./random-number";

console.log("testing...");

async function getAsyncArray() {
  const n: number[] = [];
  n[0] = await getRandomNumber();
  n[1] = await getRandomNumber();
  n[2] = await getRandomNumber();
  return n;
}

console.log("brojevi " + (await getAsyncArray()));

Promise.all([getRandomNumber(), getRandomNumber(), getRandomNumber()]).then(
  (array) => {
    console.log("brojevi u paraleli " + array);
  },
);

