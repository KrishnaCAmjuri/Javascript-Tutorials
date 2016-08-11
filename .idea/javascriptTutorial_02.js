/**
 * Created by krishnachaitanyaamjuri on 11/08/16.
 */

var a = 2;
var b = 3;
if (a < b)
    console.log("man");
else
    console.log("maan");

var count = 0;

while(count < 0) {
    console.log("while");
    count += 1;
}

count = 0;

do {
    console.log("do while");
    count += 1;
}while (count < 0)

for (var i = 0; i < 2; i++) {
    if (i == 1)
        break;
    console.log("for");
}

switch (a) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("a");
        break;
}

// Looping a traingle

console.log("\nLooping a traingle\n");

var t = "#";
for (var i = 0; i < 7; i++) {
    console.log(t);
    t = t + "#";
}

// FizzBuzz

console.log("\nFizzBuzz\n");

for (var  i = 1; i < 101; i++) {
    if ((i%3 == 0) && (i%5 != 0)) {
        console.log("Fizz");
    }else if ((i%3 != 0) && (i%5 == 0)) {
        console.log("Buzz");
    }else if ((i%3 == 0) && (i%5 == 0)) {
        console.log("FizzBuzz");
    }else {
        console.log(i);
    }
}

// ChessBoard

console.log("\nChessBoard\n");

var w = 8;
var oddRow = "";
var evenRow = "";

for (var i = 1; i < 9; i++) {
    if (i%2 == 0) {
        oddRow += "#";
        evenRow += " ";
    }else  {
        evenRow += "#"
        oddRow += " ";
    }
}

for (var i = 1; i < 9; i++) {
    if (i%2 == 0) {
        console.log(evenRow);
    }else  {
        console.log(oddRow);
    }
}