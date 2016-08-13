/**
 * Created by krishnachaitanyaamjuri on 11/08/16.
 */

var numberList = [2, 3, 4, 5, 6, 7]; // array
numberList.push(8);
numberList.push(0, 1);
console.log(numberList);
console.log(numberList.pop());
console.log(numberList['length'] + numberList.length);

var exampleStr = 'MaturE';
console.log(exampleStr.toUpperCase());
console.log(exampleStr.toLowerCase());
//the global scope in which global variables live can also be approached as an object

var strArray = ['the', ' pres', 'tige'];
console.log(strArray.join(''));

var dairyObj = { // it's more like a struct in an oop
    squirrel: false,
    events: ['work', 'pizza', 'running']
};

console.log(dairyObj.squirrel);
dairyObj.wolf = false;
console.log(dairyObj);

dairyObj.wolf = undefined;
console.log(dairyObj);

dairyObj.wolf = true;

delete  dairyObj.squirrel;

console.log(dairyObj);

var exampleObj = {
    left: "baby",
    right: "babies"
}
exampleObj.left = undefined;
delete exampleObj.right;
console.log('left' in exampleObj); // to check whether the object has that property
console.log('right' in exampleObj);
console.log(exampleObj);

var a = {
    lo: 0,
    po: 9
};
var b = a;
b = {
    lo: 0,
    po: 9
};

console.log(a == b);

// The Lycanthrope's Log

console.log('\nThe Lycanthrope\'s Log\n');

var journal = [];

function addEntry(events, didITransformToSquirrel) {
    journal.push({
        events: events,
        squirrel: didITransformToSquirrel
    });
}
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);

console.log(journal);

// object mapping - similar to Hash Map & Dictionary

var map = {};
map['a'] = 1;
map['b'] = 2;
map['c'] = 3;
console.log(map);

// queue behaviour for array - shift/unshift; stack behaviour for array - push/pop; other array methods

var toDoList = [];
function rememberTo(task) {
    return toDoList.push(task);
}
function whatIsNext() {
    return toDoList.shift();
}
function urgentlyRememberTo(task) {
    return toDoList.unshift(task);
}

console.log(rememberTo('wakeup at 6 am'));
console.log(rememberTo('sleep at 10 pm'));
console.log(whatIsNext());
console.log(urgentlyRememberTo('brushyourteeth'));
console.log(whatIsNext());

console.log([1, 2, 3, 2, 3].indexOf(2));
console.log([1, 2, 3, 2, 3].lastIndexOf(2));
console.log([1, 2, 3, 2, 3].slice(2));
console.log([1, 2, 3, 2, 3].slice(1, 3)); // slice - start index is inclusive and end index is exclusive

// values of type string, number, boolean are not objects

var exStr = 'My String Theeron';
console.log(exStr.indexOf('S'));
console.log(exStr.indexOf('ee'));
console.log(exStr.indexOf('Te')); // not found -> -1
console.log("\nCharliez Theeron  ".trim()); //trim removes space, tab, newline and similar from start and end of string
console.log(exStr.length);
console.log(exStr[4]);
console.log(exStr.charAt(4));

// arguments object

journal = [];

function addEntry(squirrel) {
    var entry = {events: [], squirrel: squirrel};
    for(var i = 1; i < arguments.length; i++) {
        entry.events.push(arguments[i]);
    }
    journal.push(entry);
    console.log(journal);
}

addEntry(true, 'ate nuts', 'ran', 'cold beer', 'watched friends');
addEntry(false, 'ate nuts', 'ran', 'watched friends', 'programmed');

// The Sum of a Range

console.log('\nThe Sum of a Range\n');

function theRange(start, end, step) {
    if (step == null) {
        step = 1
    }
    var arr = [];
    while (step > 0 ? start <= end : start >= end) {
        arr.push(start);
        start += step;
    }

    return arr;
}

function theSum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(theSum(theRange(0, 5)));

// Reversing an Array

console.log('\nReversing an Array\n');

function reverseArray(arr) {
    var revArr = [];
    for(var i = arr.length-1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

function reverseArrayInPlace(arr) {
    for(var i = 0; i < (arr.length/2 - 1); i++) {
        var a = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = a;
    }
}

console.log(reverseArray([1, 2, 3, 4, 5]));

arr = [1, 2, 3];
reverseArrayInPlace(arr);

console.log(arr);

// A List

console.log('\nA List\n');

function arrayToList(arr) {
    var linkedlist = {
        value: arr[0],
        nextEle: null
    }
    var nextElem = linkedlist;
    for(var i = 1; i < arr.length; i++) {
        var ele = {
            value: arr[i],
            nextEle: null
        }
        nextElem.nextEle = ele;
        nextElem = nextElem.nextEle;
    }
    return linkedlist;
}

function listToArray(lList, arr) {
    if(arr == null) {
        arr = [];
    }
    arr.push(lList.value);
    if(lList.nextEle == null) {
        return;
    }else {
        listToArray(lList.nextEle, arr);
    }
}

var arr = [];
listToArray(arrayToList([1, 2, 3, 4, 5, 6]), arr);
console.log(arr);

// Deep Comparison

console.log('\nDeep Comparison\n');

function deepEqual(obj1, obj2) {

    if(obj1 == null || obj2 == null) {
        return false;
    }

    if(typeof obj1 == typeof obj2) {
        if(typeof obj1 == "object") {
            for(var key in obj1) {
                if (obj1.hasOwnProperty(key)) {
                    if (!obj2.hasOwnProperty(key)) {
                        return false;
                    }else {
                        if (obj1[key] != obj2[key]) {
                            return false;
                        }else {
                            continue;
                        }
                    }
                }
            }
            return true;
        }else {
            return obj1 == obj2;
        }
    }

    return false;
}

console.log(deepEqual([1, 2, 3], [1, 2, 3]));