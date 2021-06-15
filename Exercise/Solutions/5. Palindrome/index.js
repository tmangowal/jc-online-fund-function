////////////////
/* PALINDROME */
////////////////

/* Sebuah kalimat yang dibaca sama walau dari arah terbalik (dari belakang) dengan mengabaikan karakter selain huruf */

/* ini, katak, race car, taco-cat, Madam I'm Adam */

/* Regular Expression (RegEx) */

// let word = "ababcbas! s";

// console.log(word.replace(/[^a-z]/g, ""));

/*
  Mata Hari
  mata hari
  matahari
  irahatam
*/

let word = "Madam I'm Adam";
// console.log(word);

/* Clean */
let wordClean = word.toLowerCase().replace(/[^a-z]/g, "");
console.log(wordClean);

/* Reversed */
let wordReversed = wordClean.split("").reverse().join("");
console.log(wordReversed);

let isSame = wordClean == wordReversed;
console.log(isSame);

/* Lower Case */
let wordLowerCase = word.toLowerCase();

/* Split */
let wordArr = wordLowerCase.split("");
console.log(wordArr);

/* Reverse */
wordArr.reverse();
console.log(wordArr);

/* Join */
let wordJoined = wordArr.join("");
console.log(wordJoined);

const palindrome = (word) => {
  // 1. Diubah menjadi huruf kecil (lower case)
  const wordLower = word.toLowerCase();
  // 2. Hapus selain huruf
  const wordClean = wordLower.replace(/[^a-z]/g, "");
  // 3. Ubah menjadi array
  const wordArr = wordClean.split("");
  // 4. Ubah urutannya (reverse)
  wordArr.reverse();
  // 5. Ubah menjadi satu string
  const wordJoined = wordArr.join("");

  const isSame = wordClean == wordJoined;

  return `${word} : ${isSame}`;
};

console.log(palindrome("Ka Ta-!_k"));
