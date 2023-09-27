var vowels = ["a","e","i","o","u"]
const inputArr = "hello"

let vowelCount = 0
let consCount = 0

for (const char of inputArr){
    if (vowels.includes(char)) {
        vowelCount++
    }
    else consCount++;
}

console.log(inputArr, "has",vowelCount, "vowels and", consCount, "consonants")

