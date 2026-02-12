function heapSort (arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapIfy(arr, i, arr.length);
    }
    for (let j = arr.length - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        heapIfy(arr, 0, j)
    }
    return arr;
}

function heapIfy (arr, i, n) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;
    if (largest !==  i) {
        [arr[i],  arr[largest]] = [arr[largest], arr[i]];
        heapIfy(arr, largest, n);
    }
}

const unsortedArray = [
    65, 78, 24, 91, 32, 75, 44, 12,  2,  4, 20,  6,
    29, 95, 35, 83,  7, 57, 62, 84, 48, 82, 38, 68,
    62,  7, 19, 86, 87, 50, 65, 62, 88, 32, 29, 34,
    39, 93, 79, 47, 32, 43, 67, 71, 16, 12,  3, 10,
    67, 72,  0, 34, 59, 19, 48, 18, 88, 22, 83,  7,
    63,  6, 22,  6, 72, 19, 96, 66, 76,  6, 32, 45,
    24, 47, 98, 45, 65, 10, 51, 32, 33, 70, 74, 50,
    6, 12,  6, 31, 22, 51,  4, 95, 58, 35, 41, 79,
    5, 11, 44, 93
];

console.log("Original array length:", unsortedArray.length);
console.log("First few elements:", unsortedArray.slice(0, 10));

const sortedArray = heapSort([...unsortedArray]); // Create copy to not modify original

console.log("\n✅ CORRECTLY SORTED ARRAY:");
console.log(sortedArray);

// Verify it's actually sorted
let isSorted = true;
for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] < sortedArray[i-1]) {
        isSorted = false;
        break;
    }
}
console.log("\nIs array properly sorted?", isSorted);

// let a = []
//
// while(a.length < 100) {
//     a.push(Math.floor(Math.random() * 100));
// }
// console.log(a);