function polindrom(str) {
    return str === str.split('')
        .reverse()
        .join('')
}

console.log(polindrom('hg'))

function isPolindrom2(str) {
    str = str.split('')
    let startIndex = 0
    let lastIndex = str.length - 1

    while (startIndex !== (str.length + str.length % 2) / 2) {
        if (str[startIndex] !== str[lastIndex]) {
            return false
        }
        startIndex++
        lastIndex--
    }
    return true
}
console.log("feodor is polindrom " + isPolindrom2('feodor'))
console.log("level is polindrom " + isPolindrom2('level'))