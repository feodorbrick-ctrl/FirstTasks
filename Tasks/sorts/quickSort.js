function quickSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)]
    let left = []
    let right = []
    let equal = []

    for ( let num of arr) {
        if (num < pivot) {
            left.push(num)
        } else if (num > pivot) {
            right.push(num)
        } else {
            equal.push(num)
        }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([1313,51,3,532,5,-1,-1554,32]))