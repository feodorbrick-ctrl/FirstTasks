function returnsBiggerNumber(firstNumber, secondNumber, thirdNumber) {
    let result
    if (firstNumber > secondNumber) {
        result = firstNumber
    } else {
        result = secondNumber
    }

    if (result < thirdNumber) {
        result = thirdNumber
    }
    return result
}

console.log(returnsBiggerNumber(4,5,6))

function returnsBiggerNumber2(firstNumber, secondNumber, thirdNumber) {
    let result = [firstNumber, secondNumber, thirdNumber]
    result.sort(function (a,b) {
        return  b - a;
    })

    console.log(result[0])
}
returnsBiggerNumber2(1,2,3)