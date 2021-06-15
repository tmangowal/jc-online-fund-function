//////////
/* MODE */
//////////

/* Angka yang sering muncul */

/*
  [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]

  1 : 1
  2 : und
  3 : 4 (mode)
  4 : 2
  5 : 4 (mode)

  count : [und, 1, und, 4, und, und]
  maxCount : 4

  mode : ambil semua nomor index yang menyimpan nilai sebesar maxCount
  mode : [3 , 5]


*/

const mode = (numbers) => {
  let maxCount = 0
  let counts = []
  let mode = []

  // [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]
  // count : [und, und, und, 1, 1, 2]
  numbers.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1

    if(counts[number] > maxCount) {
      maxCount = counts[number]
    }

  })

  counts.forEach((count, idx) => {
    if(count == maxCount){
      mode.push(idx)
    }
  })

  return mode
}

console.log(mode([3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]))
