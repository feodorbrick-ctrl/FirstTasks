function factor (faktor_num) {

    let resultStr
    let pushElement
    let prize = []
    let resultNum = 1
    let result
    for (let i = 0; i < faktor_num; i++) {
        pushElement = faktor_num - i
        prize.push(pushElement)
    }

    resultStr = prize.join(' * ')

    for (let i = faktor_num; i > 0; i--) {
        resultNum = resultNum * i
    }

    result = resultStr + ' = ' + resultNum
    return result

}

console.log(factor(5))