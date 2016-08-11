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

