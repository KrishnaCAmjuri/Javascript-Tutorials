/**
 * Created by krishnachaitanyaamjuri on 13/08/16.
 */

function actionEach(arr, action) {
    if (action == null) {
        action = console.log;
    }
    for(var i = 0; i < arr.length; i++) {
        action(arr[i]);
    }
}

actionEach([1, 2, 3, 4], console.log);

var numArr = [1, 2, 3, 4, 5];
var sum = 0;
actionEach(numArr, function (number) {
    sum += number;
});
console.log(sum);

//Higher order functions - functions that operate on other functions either by taking them as input or returning them as output
function greaterThan(num) {
    return function (m) {
        return m > num;
    }
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(9));

function noisToFunc(f) {
    return function (arg) {
        console.log('calling with', arg);
        var val = f(arg);
        console.log('called with', arg, '- got', val);
        return val;
    };
}

var greaterThan11 = noisToFunc(greaterThan)(11);
console.log(greaterThan11(12));

function unless(test, then) {
    if(!test) {
        then();
    }
}

function repeat(times, body) {
    for(var i = 0; i < times; i++) {
        body(i);
    }
}

repeat(8, function (n) {
    unless(n%2, function () {
        console.log(n + ' is even');
    });
});

/*
function transparentWrapping(f) {
    return function () {
        return f.apply(null, arguments);
    };
}*/

console.log('\n---ANCESTRY DATA---\n');

var ANCESTRY_FILE = "[\n  " + [
        '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
        '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
        '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
        '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
        '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
        '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
        '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
        '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
        '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
        '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
        '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
        '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
        '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
        '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
        '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
        '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
        '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
        '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
        '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
        '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
        '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
        '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
        '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
        '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
        '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
        '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
        '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
        '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
    ].join(",\n  ") + "\n]";

// console.log(JSON.parse(ANCESTRY_FILE)[0]);

//filter pattern
function filterArrTest(arr, filter) {
    var passed = [];
    for(var i = 0; i < arr.length; i++) {
        if(filter(arr[i])) {
            passed.push(arr[i]);
        }
    }
    return passed;
}

console.log(filterArrTest(JSON.parse(ANCESTRY_FILE), function (obj) {
    return obj.died > 1900;
}));

//map pattern
function mapArrTest(arr, trans) {
    var mapped = [];
    for(var i = 0; i < arr.length; i++) {
        mapped.push(trans(arr[i]));
    }
    return mapped;
}

var maleNamesArr = mapArrTest(filterArrTest(JSON.parse(ANCESTRY_FILE), function (obj) {
    return obj.sex == 'm';
}), function (obj) {
    return obj.name;
})

console.log( '\nmale names array:' + "\n------\n" + maleNamesArr.join('\n') + '\n');

//reduce pattern

/*console.log(JSON.parse(ANCESTRY_FILE).reduce(function (min, cur) {
    if(cur.born < min.born) {
        return cur;
    }else {
        return min;
    }
}));*/

function reduceArrTest(arr, red, start) {
    var current = (start != null) ? start : arr[0];
    for(var i = 0; i < arr.length; i++) {
        current = red(current, arr[i]);
    }
    return current;
}

console.log(reduceArrTest(JSON.parse(ANCESTRY_FILE), function (max, curr) {
    if((curr.died - curr.born) > (max.died - max.born)) {
        return curr;
    }else {
        return max;
    }
}));

//composability of code - Higher order functions shine when you have complex tasks and need to compose code to do them

function averageTestArr(arr) {
    function plusTest(a,b) {
        return a+b;
    }
    return reduceArrTest(arr, plusTest)/arr.length;
}

function ageTest(obj) {
    return (obj.died - obj.born);
}

function male(obj) {
    return obj.sex == 'm';
}

function female(obj) {
    return obj.sex == 'f';
}

var malearr = filterArrTest(JSON.parse(ANCESTRY_FILE), male);
var femalearr = filterArrTest(JSON.parse(ANCESTRY_FILE), female);
console.log(averageTestArr(mapArrTest(malearr, ageTest)));
console.log(averageTestArr(mapArrTest(femalearr, ageTest)));

//example - finding the oldest ancestor with last name Haverbeke in dataset

var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
    function valueFor(person) {
        if(person == null) {
            return defaultValue;
        }else {
            return f(person, valueFor(byName[person.father]), valueFor(byName[person.mother]));
        }
    }
    return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
    if(person.name == 'Pauwels van Haverbeke') {
        return 1;
    }else {
        return (fromMother + fromFather)/2;
    }
}

var ph = byName['Philibert Haverbeke'];
console.log(byName['Pauwels van Haverbeke']);
console.log(reduceAncestors(ph, sharedDNA, 0));

function countAncestors(person, filterFunc) {
    function combineAncestorCount(person, fromFather, fromMother) {
        var thisOneCounts = filterFunc(person);
        return (thisOneCounts ? 1 : 0) + fromMother + fromFather;
    }
    return reduceAncestors(person, combineAncestorCount, 0);
}

console.log(countAncestors(ph, function (person) {
    return ageTest(person) > 20;
}));

// bind method - creates a new function that will call the original function but with some of the arguments already fixed

console.log('\n---bind---\n')

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person) {
    return set.indexOf(person) > -1;
}

// console.log(filterArrTest(ancestry, function (obj) {
//     return isInSet(theSet, obj.name);
// }));

// console.log(ancestry.filter(isInSet.bind(null, theSet)));

//---Flattening---
console.log('---flattening---');

//---Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.----
console.log('\n---Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.---\n');

var arrOfarr = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11], [12, 13, 14, 15, 16, 17], [18, 19 ,20]];

function turnToString(obj) {
    return obj.join(', ');
}

function turnToArray(str) {
    return JSON.parse('['+str+']');
}

function reduceFuncFlattening(currArr, arrToOperateOn) {
    var arrToPush = turnToArray(turnToString(arrToOperateOn));
    for(var i = 0; i < arrToPush.length; i++) {
        currArr.push(arrToPush[i]);
    }
    return currArr;
}

console.log(arrOfarr.reduce(reduceFuncFlattening));

//---Mother-Child Age Difference---
console.log('\n---Mother-Child Age Difference---');

//---Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.---
console.log('\n---Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.---\n');

// console.log(JSON.parse(ANCESTRY_FILE));

function mapToGetMotherChildAgeDifferenceArray(objToOperateOn) {
    if(objToOperateOn.mother == null) {
        return null
    }else {
        var childBorn = objToOperateOn.born;
        var motherName = objToOperateOn.mother;
        var motherObj = byName[motherName];
        if(motherObj == undefined) {
            return null;
        }
        // console.log(motherObj);
        // console.log(objToOperateOn);
        var motherBorn = motherObj.born;
        return (childBorn-motherBorn);
    }
}

var obbbj = { name: 'Elisabeth Hercke', sex: 'f', born: 1632, died: 1674, father: 'Willem Hercke', mother: 'Margriet de Brabander'};

console.log(averageTestArr(filterArrTest(mapArrTest(JSON.parse(ANCESTRY_FILE), mapToGetMotherChildAgeDifferenceArray), function (obj) {
    return (obj != null);
})));

//---Historical Life Expectancy---
console.log('\nHistorical Life Expectancy\n');

/*Compute and output the average age of the people in the ancestry
 data set per century. A person is assigned to a century by taking their year of death,
 dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).*/

var byNameForDeathDate = {};
var byNameForAge = {};
ancestry.forEach(function (person) {
    byNameForDeathDate[person.name] = person.died;
    byNameForAge[person.name] = person.died - person.born;
});

function groupByCentury() {
    var groupingObj = {};
    ancestry.forEach(function (person) {
        var centuryStr = Math.ceil(byNameForDeathDate[person.name]/100).toString();
        if(groupingObj[centuryStr] == undefined) {
            groupingObj[centuryStr] = [byNameForAge[person.name]];
        }else {
            groupingObj[centuryStr].push(byNameForAge[person.name]);
        }
    });
    return groupingObj;
}

console.log(groupByCentury());
console.log(averageTestArr(groupByCentury()['17']));

//---Every and Then Some---
console.log('\n---Every and Then Some---\n');

/*Write two functions, every and some, that behave like these methods,
except that they take the array as their first argument rather than being a method.*/

function everyForArr(arr, pred) {
    var returnValue = false;
    arr.forEach(function (obj) {
        returnValue = pred(obj);
    });
    return returnValue;
}

function someForArr(arr, pred) {
    var returnValue = false;
    for(var i = 0; i < arr.length; i++) {
        returnValue = pred(arr[i]);
        if(returnValue) {
            return true;
        }
    }
    return returnValue;
}

console.log(everyForArr(groupByCentury()['18'], function (obj) {
    return (obj>60);
}));

console.log(someForArr(groupByCentury()['18'], function (obj) {
    return (obj>60);
}));