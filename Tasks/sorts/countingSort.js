function countingSort (arr) {
    let MaxElement = 0

    for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] > MaxElement) MaxElement = arr[i];
    }

    let orderOfNumbers = Array(MaxElement + 1).fill(0);
    arr.forEach( value => {
        orderOfNumbers[value]++;
    })
    let i = 0
    orderOfNumbers.forEach((value, indexValue) => {
        for (let j = 0; j < value; j++) {
            arr[i] = indexValue;
            console.log(value,indexValue)
            orderOfNumbers[indexValue]--;
            i++;
        }
    })
    return arr;
}

console.log("\n✅ CORRECTLY SORTED ARRAY:",
    countingSort([
        65, 78, 24, 91, 32, 75, 44, 91, 12,  2,  4, 20,  6,
    ]));