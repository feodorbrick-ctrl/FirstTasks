function radixSort(arr) {
    const maxNum = Math.max(...arr);
    const maxDigits = Math.floor(Math.log10(maxNum)) + 1;

    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            const digit = Math.floor(arr[j] / Math.pow(10, i) % 10);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

// Пример использования
const unsortedArray = [137, 24, 5, 92, 1001, 3, 56];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Вывод: [3, 5, 24, 56, 92, 137, 1001]