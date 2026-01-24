let GetStr = 'A man  a plan, a canal: Panama'.toLowerCase().split('')
let PolindromStr = []
let PuntationMarks = [',','.','<','>','[',']','{','}','|','?','/','=','+','-','_',' ','"',' ',':',';','(',')','*','&','^','%','$','#','@','!','~','`']
let isFoud = false
let result
let lastIndex

for (let i = 0; i < GetStr.length; i++) {
    isFoud = false
    for (let j = 0; j < PuntationMarks.length; j++) {
        if (GetStr[i] === PuntationMarks[j]) {
            isFoud = true
        }
        if (GetStr[i] !== PuntationMarks[j] && isFoud === false && j === 31) {
            PolindromStr[PolindromStr.length] = GetStr[i]
        }
    }
}
lastIndex = PolindromStr.length - 1

result = PolindromStr.join('') === PolindromStr.reverse().join('')

console.log(result)