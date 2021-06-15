///////////////////
/* CAESAR CIPHER */
//////////////////

/* Setiap huruf akan diubah menjadi huruf berikutnya dengan jarak tertentu */

/* abc (shift 3) def */

/* "Sunday Six" (shift = 2)  ==>  "Uwpfca Ukz" */
 //

/*

  length = 5
  a b c d e

  b shift 3 --> e
  1 + 3 = 4 --> e

  b shift 5 --> b
  b shift 10 --> b

  b shift 7 --> d (index 3)
  1 + 7 = 8 % 5 = 3

  next index = (index + shift) % length

*/

/*
  length = 26
  alphabet = a b c d e f g h i j k l m n o p q r s t u v w x y z

  "Abc Yz" shift 2 --> "Cde Ab"

  // split(" ")
  result : ["Abc", "Yz"]

  // map
  result : ["Cde", "Ab"]

    "Abc"

    // lowercase
    result : "abc"

    // split("")
    result : ["a", "b", "c"]

    // map
    result : ["c", "d", "e"]

      next index = (index + shift) % length
      next index = (0 + 2) % 26 = 2 % 26 = 2
      next index = 2

      return alphabet[2]

    // toUpperCase
    result : ["C", "d", "e"]

    // join("")
    result : Cde

    return Cde

  // join(" ")
  result: "Cde Ab"

  return "Cde Ab"
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const caesarCipher = (word, shift) => {
  // word : "Abc Yz"
  // shift: 2

  // words = ["Abc", "Yz"]
  const words = word.split(" ")

  // words = ["Abc", "Yz"]
  // wordsResult = ["Cde", "Ab"]
  const wordsResult = words.map((word) => {
    // word : "Abc"
    // wordSplitted = ["a", "b", "c"]
    const wordSplitted = word.toLowerCase().split("")

    // wordSplitted = ["a", "b", "c"]
    // wordShifted = ["c", "d", "e"]
    const wordShifted = wordSplitted.map((word) => {
      // word : "b"
      // next index = (index + shift) % 26

      // nextIndex = (1 + 2) % 26 = 3
      const nextIndex = (alphabet.indexOf(word) + shift) % 26

      // alphabet[3] = d
      return alphabet[nextIndex]

    })

    // wordShifted = ["C", "d", "e"]
    wordShifted[0] = wordShifted[0].toUpperCase()

    // wordShifted = "Cde"
    return wordShifted.join("")
  })

  // wordsResult = "Cde Ab"
  return wordsResult.join(" ")
}

console.log(caesarCipher("Abc Yz", 2))
console.log(caesarCipher("Sunday Six", 2))
