/////////////////////
/* SORT DESCENDING */
/////////////////////

/*
  1. return < 0 , a akan berada sebelum b

  2. return 0 , posisi a dan b tidak berubah

  3. return > 0 , b akan berada sebelum a
*/

const words = ["Elephant", "Black", "Yes", "Yas", "Rain"];
// Result = [ 'Yes', 'Yas', 'Rain', 'Elephant', 'Black' ]

words.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});

console.log(words);
