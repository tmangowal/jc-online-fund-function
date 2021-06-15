//////////////////
/* REVERSE WORD */
/////////////////

/* Reverse untuk setiap kata */

/* Hai aku Joan Mir */
/* iaH uka naoJ riM */

/*
  Hai aku Joan Mir

  // split(" ")
  ["Hai", "aku", "Joan", "Mir"]

  // map
  "iaH", "uka", "naoJ", "riM"][

      "Hai"

      // split
      ["H", "a", "i"]

      // reverse
      ["i", "a", "H"]

      // join
      return "iaH"

  // join
  iaH uka naoJ riM

*/

const reverseWords = (word) => {
  let words = word.split(" ");

  let wordsFinal = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return wordsFinal.join(" ");
};

const reverseWords2 = (word) => {
  let wordsFinal = word
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");

  return wordsFinal;
};

console.log(reverseWords("Hai aku Joan Mir"));
