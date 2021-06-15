///////////////
/* FIBONACCI */
///////////////

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.table(numbers);

/*
  1, 1, ? ? ?
  p1 = 1 , p2 = 1

  p < 3 --> 1

  p >=3 --> (p - 1) + (p - 2)


  p5 = ?
  p5 - 1                        + p5 - 2
  p4                            + p3
  p4 - 1            + p4 - 2    + p3 - 1 + p3 - 2
  p3                + p2        + p2     + p1
  p3 - 1 + p3 - 2   + 1         + 1      + 1
  p2     + p1       + 3
  1     + 1       + 3

  5 <== Result
*/

/* Remember ! fibonacci berguna untuk mencari tahu nilai pada posisi tertentu */

const fibonacci = (p) => {
  // p = 2
  if (p < 3) {
    return 1;
  } else {
    // fibonacci(3)                   + fibonacci(2)
    // fibonacci(2) + fibbonaci(1)    + 1
    // 1            + 1               + 1
    return fibonacci(p - 1) + fibonacci(p - 2);
  }
};

var fibResult = fibonacci(4);
console.log(fibResult);
