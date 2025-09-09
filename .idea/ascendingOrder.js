    function ascendingNumbersOrder(str) {
        str = str.split('').map(Number)
        let elementKey = []
        let deliteElement
        for (let j = 0; j < str.length; j++) {
            elementKey[j] = str[j]
        }
        for (let i = 0; i < str.length; i++) {
                if (str[i] > str[i + 1]) {

                    deliteElement = str[i + 1]
                    str[i + 1] = str[i]
                    str[i] = deliteElement
                    if (str.indexOf(elementKey[i]) > i + 2) {

                        deliteElement = str[i + 1]
                        str[i + 1] = str[i]
                        str[i] = deliteElement
                        if (str.indexOf(elementKey[i]) > i + 2) {

                            deliteElement = str[i + 1]
                            str[i + 1] = str[i]
                            str[i] = deliteElement
                            if (str.indexOf(elementKey[i]) > i + 2) {

                                deliteElement = str[i + 1]
                                str[i + 1] = str[i]
                                str[i] = deliteElement
                            }
                        }
                    }
                }
        }
        return str
    }

    console.log(ascendingNumbersOrder('4321'))

    // for (let j = 0; j < elementKey.length; j++) {
    //     if (str[i] > str[i + 1])
    //
    // }