//////////////////
/* MAP ODD EVEN */
//////////////////

/*
  num % 2 = 0 (EVEN)
  num % 2 = 1 (ODD)
*/

const numbers = [22, 17, 19, 20, 14];
// [ 'even', 'odd', 'odd', 'even', 'even' ]

const numResult = numbers.map((number) => {
  if (number % 2 == 1) {
    return "odd";
  } else {
    return "even";
  }
});

console.log(numResult);
