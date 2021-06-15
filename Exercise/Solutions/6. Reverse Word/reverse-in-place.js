////////////////////////////
/* REVERSE ARRAY IN PLACE */
////////////////////////////

const words = ["in", "do", "ne", "si", "a"];

/* REVERSE 1 : Gunakan method reverse */

words.reverse();
console.log(words);

/* REVERSE 2 : For Loop + 1 array baru */

let revWords = [];
for (var i = words.length - 1; i >= 0; i--) {
  revWords.push(words[i]);
}
console.log(revWords);

/* IN PLACE = Tanpa membuat satu array tambahan */

const revArray = (arr) => {
  var temp;
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
};

console.log(revArray(words));
