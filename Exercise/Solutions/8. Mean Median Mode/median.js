////////////
/* MEDIAN */
////////////

/* Nilai tengah */

/*
  G A N J I L
  numbers = [2 3 4 5 7 6 7] median : 5


  // sort
  [2 3 4 5 6 7 7]

  median : length / 2
  median : Math.floor(7 / 2)
  median : 3
  median : numbers[3]

*/

/*
  G E N A P
  numbers = [2 3 4 5 6 6 7 7] median : 5.5

  median : length / 2
  median : Math.floor(8 / 2)
  median : 4
  median : (numbers[4] + numbers[3]) / 2
  median : (6 + 5) / 2
  median : 5.5

*/

const median = (numbers) => {
  const len = numbers.length
  const half = Math.floor(len / 2)

  if(len % 2 == 1){
    return numbers[half]
  } else {
    return (numbers[half] + numbers[half-1]) /2
  }
}

console.log(median([2, 3, 4, 5, 7, 6, 7]))
console.log(median([2, 3, 4, 5, 6, 6, 7, 7]))
