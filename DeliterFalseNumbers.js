function DeliterFalseNumbers(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i])
        }
    }
    return result
}

console.log(DeliterFalseNumbers([3,1,2,4]))