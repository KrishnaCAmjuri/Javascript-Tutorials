/**
 * Created by krishnachaitanyaamjuri on 11/08/16.
 */

var square = function (x) {
    return Math.pow(x, 2);
}

console.log(square(2));

function printFizz(x) { // variables declared outside the function are global;
    if (typeof x == "string") {
        console.log(x);
    }else  {
        console.log(typeof x);
    }
}

printFizz(5);

function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var  i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2));

function multiplier(factor) {
    return function (number) {
        return factor*number;
    }
}

var twice = multiplier(2);
console.log(twice(1));

// find the sequence of operations(*3, +5 are allowed) to be performed on 1 to reach a number

function findSolution(target) {
    function find(start, history) {
        if (start == target) {
            return history;
        }else if(start > target) {
            return null;
        }else {
            return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
        }
    }
    return find(1, "1");
}

console.log(findSolution(6));

// Minimum

console.log("\n-----Minimum-----\n");

function minimum(a, b) {
    return a < b ? a : b;
}
console.log(minimum(2, 3));

// Recursion

console.log("\n-----Recursion-----\n");

function isEven(a) {
    if (a == 1) {
        return false;
    }else if (a == 0) {
        return true;
    }else  {
        return isEven(a-2);
    }
}
console.log(isEven(75));

// Bean Counting

console.log("\n-----Bean Counting-----\n");

function countBs(inputString, comparedchar) {
    if (comparedchar == null) {
        comparedchar = 'B';
    }
    var count = 0;
    for(var i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) == comparedchar) {
            count++;
        }
    }
    return count;
}

console.log(countBs("Beearryenson", "a"));