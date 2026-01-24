function Fibonacci(num) {
    let resNum = [1]
    let lastElement
    for (let i = 1; i <= num; i++) {
        if (resNum.length <= 1 ) {
            resNum[i] = 2
        } else {
            resNum[i] = resNum[i - 1] + resNum[i - 2]
            lastElement = i
            if (resNum.length === num - 1) break
        }
    }
    return 'fib(' + num + ') = ' + resNum[lastElement]
}

console.log(Fibonacci(6))