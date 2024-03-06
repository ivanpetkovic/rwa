import { getRandomNumber } from "./random-number";


getRandomNumber()
  .then((num: number) => {
    console.log(num);
    return getRandomNumber();
  })
  .then((num: number) => {
    console.log(num);
    return getRandomNumber();
  })
  .then((num: number) => {
    console.log(num);
  })
  
  .catch(reason => {
    console.error(reason);
  });
