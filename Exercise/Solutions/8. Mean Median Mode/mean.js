// MEAN

const mean = (numbers) => {
  let sum = 0;

  // numbers :  [1, 1, 3, 5, 7]
  // number :
  // sum :
  numbers.forEach((number) => {
    sum += number;
  });

  // 17 / 4
  return sum / numbers.length;
};

console.log(mean([1, 1, 3, 5, 7]));
