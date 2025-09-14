function CountingElementsInArray(array) {
    let result = {
        apple: 0,
        banana: 0
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'apple') {
            result.apple++
        } else {
            result.banana++
        }
    }
    return result
}

console.log(CountingElementsInArray(['apple', 'banana', 'apple']))