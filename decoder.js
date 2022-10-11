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

function encode() {
  document.getElementById("ciphertext").value = "";
  document.getElementById("container").style.flexDirection = "row";
  let message = document.getElementById("plaintext").value;
  let plainMessage = message.toLowerCase();
  for (let i = 0; i < plainMessage.length; i += 1) {
    let newLetter;
    let plainLetter = plainMessage[i];
    let letters = /[^a-z]/;
    if (letters.test(plainLetter)) {
      let newLetter = plainLetter;
      document.getElementById("ciphertext").value =
        document.getElementById("ciphertext").value + newLetter;
    } else {
      let index = alfabetLower.findIndex((b) => b == plainLetter);
      let userKey = document.getElementById("key").value;
      let newIndex = index + Number(userKey);
      if (newIndex >= 26) {
        let rightIdex = Number(newIndex - 26);
        let newLetter = alfabetLower[rightIdex];
        document.getElementById("ciphertext").value =
          document.getElementById("ciphertext").value + newLetter;
      } else {
        let rightIdex = newIndex;
        let newLetter = alfabetLower[rightIdex];
        document.getElementById("ciphertext").value =
          document.getElementById("ciphertext").value + newLetter;
      }
    }
  }
}
function decode() {
  document.getElementById("plaintext").value = "";
  document.getElementById("container").style.flexDirection = "row-reverse";
  let message = document.getElementById("ciphertext").value;
  let cipherMessage = message.toLowerCase();
  for (let i = 0; i < cipherMessage.length; i += 1) {
    let backLetter;
    let cipherLetter = cipherMessage[i];
    let letters = /[^a-z]/;
    if (letters.test(cipherLetter)) {
      let backLetter = cipherLetter;
      document.getElementById("plaintext").value =
        document.getElementById("plaintext").value + backLetter;
    } else {
      let index = alfabetLower.findIndex((b) => b == cipherLetter);
      let userKey = document.getElementById("key").value;
      let backIndex = index - Number(userKey);
      if (backIndex < 0) {
        let rightIdex = Number(backIndex + 26);
        let backLetter = alfabetLower[rightIdex];
        document.getElementById("plaintext").value =
          document.getElementById("plaintext").value + backLetter;
      } else {
        let rightIdex = backIndex;
        let backLetter = alfabetLower[rightIdex];
        document.getElementById("plaintext").value =
          document.getElementById("plaintext").value + backLetter;
      }
    }
  }
}
