    function ascendingNumbersOrder(str) {
        let n = str.length
        let swapped
        do {
            swapped = false
            for (let i = 0; i < n; i++) {
                if (str[i] > str[i + 1]) {
                    [str[i], str[i + 1]] = [str[i + 1],str[i]];
                    swapped = true;
                }
            }
            n--;
        }
        while (swapped) {

        }
        return str
    }

    console.log(ascendingNumbersOrder([5,4,3,2,1]))