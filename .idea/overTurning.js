function overTurningFun(import_str) {
    const stringMassiv = import_str.split('')

    let result = [stringMassiv.length]
    let i_result = 0
    let i_stringMasiv = stringMassiv.length

    while (i_result <= stringMassiv.length) {
        result[i_result] = stringMassiv[i_stringMasiv]
        i_result++
        i_stringMasiv--
    }

    return result.join('')

}
console.log(overTurningFun('hello world'))