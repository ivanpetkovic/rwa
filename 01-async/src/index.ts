


function getRandomNumber2(cb?: (n: number) => void) {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const luckyNumber = Math.round(Math.random() * 10);
      if (luckyNumber > 3) {
        cb(luckyNumber);
      } else {
        throw new Error("Out of range " + luckyNumber);
      }
    }, 1000);
  });
}

// callback hell - ne radi ovako
getRandomNumber2((num) => {
  console.log("1. round: " + num);
  return getRandomNumber2((num) => {
    console.log("2. round: " + num);
    return getRandomNumber2((num) => console.log("3. round: " + num));
  });
}
);
