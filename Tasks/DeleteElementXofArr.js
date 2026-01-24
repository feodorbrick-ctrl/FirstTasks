let Arr = [1,4,6,3,8,2,834,894,27,43,4,1]
let DeleteElements = [3,8,2,834,894,27,43]
let Res = []

let isFoud = false;

for (let i = 0; i < Arr.length; i++) {
    isFoud = false

    for (let j = 0; j < DeleteElements.length; j++) {

        if (Arr[i] === DeleteElements[j] ) {
            isFoud = true
        }

        if (isFoud === false && j === DeleteElements.length - 1) {
            Res[Res.length] = Arr[i]
        }
    }
}
console.log(Res)

// for (let j = 0; j < Res.length; j++) {
//     console.log(`Res: ${j} - ${Res[j]}`)
// }