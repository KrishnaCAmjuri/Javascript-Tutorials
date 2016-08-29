/**
 * Created by krishnachaitanyaamjuri on 20/08/16.
 */

/*
 Normally, when you forget to put var in front of your variable, as with counter in the example,
 JavaScript quietly creates a global variable and uses that.
 In strict mode, however, an error is reported instead. This is very helpful
 */
// Strict Mode

'use strict';

function canYouSpotTheProblem() {
    for(var counter = 0; counter < 10; counter++) {
        console.log('Happy');
    }
}

canYouSpotTheProblem();

function Person(name) {
    this.name = name;
}
var ferdino = new Person('babe');

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

// testing - use testing frameworks for this

// exception

function promptDirection(question) {
    var result = question;
    if(result.toLowerCase() == "left") return "L";
    if(result.toUpperCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

try {
    console.log(promptDirection("which Way?"));
} catch (error) {
    console.log(error);
}

(function(babe) {
    function square(x) { return x * x; }
    var hundred = 100;

    babe.speak = function() {
        console.log(square(hundred));
    };
})(this.baby = {});

function reqq(name) {
    var code = new Function("babe", readFile(name));
    var exports = {};
    code(exports);
    return exports;
}

reqq('baby').speak();