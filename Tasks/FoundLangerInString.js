let String = 'hallo najmme four pancijhhhl'.split('')
let WordLength = 0
let MaxValue = 0


for (let i = 0; i < String.length; i++) {
    let currentChar = String[i]
    if (currentChar === ' ' || i === String.length - 1) {
        if (WordLength > MaxValue) {
            MaxValue = WordLength
        }
        WordLength = 0
    } else {
        WordLength++
    }
}
console.log(String)
console.log(`
Max word is ${MaxValue} words`)