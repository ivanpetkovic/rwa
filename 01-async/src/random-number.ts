

export async function getRandomNumber(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const luckyNumber = Math.round(Math.random() * 10);
      if (luckyNumber > 1) {
        resolve(luckyNumber);
      } else {
        reject(luckyNumber);
      }
    }, 1000);
  });
}
