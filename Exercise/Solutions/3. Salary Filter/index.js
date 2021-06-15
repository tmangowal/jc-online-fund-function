////////////////
/* FILTER FEE */
////////////////

/*
  Nilai gaji lebih dari 9jt setelah dikurang 5% dari total gaji
*/

const salaries = [9100000, 9800000, 9500000, 10300000, 9300000];

const salResult = salaries.filter((salary) => {
  return salary - salary * 0.05 > 9000000;
});

console.log(salResult);
