import { prompt } from "./prompt.js"

const passwordLength = prompt(
  "How many characters do you want for your password? (8-36)"
)
const isUpperCase = prompt("Majuscules ? (y:n)")
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const stringNumber = "abcdefghijklmnopqrstuvwxyz0123456789"
const isNumbers = prompt("Chiffres ? (y:n)")
const isSpecialCharacters = prompt("specials characters ? (y:n)")
const stringNumberSpecial = "abcdefghijklmnopqrstuvwxyz0123456789&é#$%&§"
const stringSpecial = "abcdefghijklmnopqrstuvwxyz&é#$%&§"
let password = ""
if (passwordLength >= 8 || passwordLength <= 36) {
  password = generatePassword(passwordLength)

  if (isUpperCase === "y") {
    password = password.toUpperCase()
  }
}

function generatePassword(password) {
  if (isNumbers === "y" && isSpecialCharacters === "y") {
    for (let i = 1; i < passwordLength; i++) {
      password += stringNumberSpecial.charAt(
        Math.floor(Math.random() * stringNumberSpecial.length)
      )
    }
    return password
  }

  if (isNumbers === "y") {
    for (let i = 1; i < passwordLength; i++) {
      password += stringNumber.charAt(
        Math.floor(Math.random() * stringNumber.length)
      )
    }
    return password
  }

  if (isSpecialCharacters === "y") {
    for (let i = 1; i < passwordLength; i++) {
      password += stringSpecial.charAt(
        Math.floor(Math.random() * stringSpecial.length)
      )
    }
    return password
  }
}

console.log(password)
