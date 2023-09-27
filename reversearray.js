const inputArr = [1,2,3]
const reversedArr = []

for (let i = inputArr.length -1; i >= 0; i--){
    const valueAtIndex = inputArr[i]

    reversedArr.push(valueAtIndex)
}

console.log(reversedArr)