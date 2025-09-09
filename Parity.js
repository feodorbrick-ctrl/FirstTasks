function Parity(number) {
    number = number / 2
    let Acc = number.toString()

    const indx= Acc.indexOf('.')

    if (indx === -1) {
        return true;
    } else{
        return false;
    }
}
console.log(Parity(3))

function Parity2(number) {
    return number % 2 === 0
}
console.log(Parity2(3))