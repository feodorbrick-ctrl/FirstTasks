function DELITE_DUBLIKATE(str) {
    str = str.split('')
    let result = []
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (result.includes(str[i]) === false) {
            result[index] = str[i]
            index++
        }
    }
    return result;
}

console.log(DELITE_DUBLIKATE('00102030405060708090'))