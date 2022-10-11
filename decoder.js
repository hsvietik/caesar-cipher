const alfabetLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function clean() {
  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
}
function encode() {
  document.getElementById("container").style.flexDirection = "row";
  let plainMessage = document.getElementById("plaintext").value;
  console.log(plainMessage);
  for (let i = 0; i < plainMessage.length; i += 1) {
    let newLetter;
    let plainLetter = plainMessage[i];
    console.log(plainLetter);
    let index = alfabetLower.findIndex((b) => b == plainLetter);
    console.log(index);
    let userKey = document.getElementById("key").value;
    let newIndex = index + Number(userKey);
    if (newIndex >= 26) {
      let rightIdex = Number(newIndex - 26);
      let newLetter = alfabetLower[rightIdex];
      console.log(rightIdex);
      console.log(newLetter);
      document.getElementById("ciphertext").value =
        document.getElementById("ciphertext").value + newLetter;
    } else {
      let rightIdex = newIndex;
      let newLetter = alfabetLower[rightIdex];
      console.log(rightIdex);
      console.log(newLetter);
      document.getElementById("ciphertext").value =
        document.getElementById("ciphertext").value + newLetter;
    }
  }
}
function decode() {
  document.getElementById("container").style.flexDirection = "row-reverse";
  let cipherMessage = document.getElementById("ciphertext").value;
  console.log(cipherMessage);
  for (let i = 0; i < cipherMessage.length; i += 1) {
    let backLetter;
    let cipherLetter = cipherMessage[i];
    console.log(cipherLetter);
    let index = alfabetLower.findIndex((b) => b == cipherLetter);
    console.log(index);
    let userKey = document.getElementById("key").value;
    let backIndex = index - Number(userKey);

    if (backIndex < 0) {
      let rightIdex = Number(backIndex + 26);
      let backLetter = alfabetLower[rightIdex];
      console.log(rightIdex);
      console.log(backLetter);
      document.getElementById("plaintext").value =
        document.getElementById("plaintext").value + backLetter;
    } else {
      let rightIdex = backIndex;
      let backLetter = alfabetLower[rightIdex];
      console.log(rightIdex);
      console.log(backLetter);
      document.getElementById("plaintext").value =
        document.getElementById("plaintext").value + backLetter;
    }
  }
}

// let alfabetUpper = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
