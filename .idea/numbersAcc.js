function numbersAcc (numbers) {

    let numbersArr = numbers.split('')
    let result = []
    numbersArr.forEach((str) => {
        result.push(parseInt(str) * 2)
    })

    return result
}
console.log(numbersAcc('213'))