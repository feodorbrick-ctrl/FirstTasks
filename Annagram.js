let STR = 'hello'.split('')
let Ifer = 'holel'.split('')
let resultAllElements = []
let  result
for (let i = 0; i < Ifer.length; i++) {
    if (STR.length !== Ifer.length) {
        resultAllElements[i] = false
        break
    }
    for (let j = 0; j < Ifer.length; j++) {
        if (STR[i] === Ifer[j]) {
            resultAllElements[i] = true
            break
        } else {
            resultAllElements[i] = false
            if (j === STR.length) {
                break
            }
        }
    }
}

for (let i = 0; i < resultAllElements.length; i++) {
    if (resultAllElements[i] === true) {
        result = true
    } else {
        result = false
    }
}
console.log(result)