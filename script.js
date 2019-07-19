let romanNumbers = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

let numSize = {
    1: 1,
    2: 10,
    3: 100,
    4: 1000
};

function convertToRoman(num) {
    let size = num.toString().length;
    let number = [];

    let numOne = 1;
    for (let i = 0; i < size; i++) {
        if (num % 10 != 0) {
            number.push((num % 10) * numOne);
        }
        numOne *= 10;
        num = Math.floor(num / 10);
    }

    number.reverse();
    let result = "";

    number.map(num => {
        if (romanNumbers.hasOwnProperty(num)) {
            result += romanNumbers[num];
        } else if (romanNumbers.hasOwnProperty(num + numSize[num.toString().length])) {
            result +=
                romanNumbers[numSize[num.toString().length]] +
                romanNumbers[num + numSize[num.toString().length]];
        } else {
            if (romanNumbers.hasOwnProperty(num - numSize[num.toString().length])) {
                result +=
                    romanNumbers[num - numSize[num.toString().length]] +
                    romanNumbers[numSize[num.toString().length]];
            } else if (romanNumbers.hasOwnProperty(num - numSize[num.toString().length] * 2)) {
                result +=
                    romanNumbers[num - numSize[num.toString().length] * 2] +
                    romanNumbers[numSize[num.toString().length]] +
                    romanNumbers[numSize[num.toString().length]];
            } else {
                result +=
                    romanNumbers[num - numSize[num.toString().length] * 3] +
                    romanNumbers[numSize[num.toString().length]] +
                    romanNumbers[numSize[num.toString().length]] +
                    romanNumbers[numSize[num.toString().length]];
            }
        }
    });
    return result;
}

convertToRoman(3999);
