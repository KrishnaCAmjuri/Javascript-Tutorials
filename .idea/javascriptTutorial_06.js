/**
 * Created by krishnachaitanyaamjuri on 14/08/16.
 */

function speak(line) {
    console.log('The ' + this.type + ' rabbit says \'' + line + '\'');
}
var whiteRabbit = {type:'white', speak:speak};
var fatRabbit = {type:'fat', speak:speak};
var blackRabbit = {type:'black', speak:speak};

whiteRabbit.speak('I am rabbit');
fatRabbit.speak('I am fat');
blackRabbit.speak('Imma black, take this');

speak.apply(null, ['Hello dello']);
speak.apply(whiteRabbit, ['stick out your tongue']);
speak.call(blackRabbit, 'take off your shirt ;P');

//---Prototypes---  prototyping is similar to subclassing
console.log('\n---Prototypes---')
var empty = {};
console.log(empty.toString());
console.log(Object.prototype);
console.log(Object.getPrototypeOf(empty));
console.log(Object.getPrototypeOf(empty) == Object.prototype);
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

var protoFriendsChar = {
    speak: function (line) {
        console.log(this.type + ': \'' + line + '\'');
    }
}

var monica = Object.create(protoFriendsChar);
monica.type = 'Monica';
monica.speak('Careful, careful, careful!!!');

var chandler = Object.create(protoFriendsChar);
chandler.type = 'Chandler';
chandler.speak('From now on, I will be careful unless told otherwise');

function ManChills(type) {
    this.type = type;
    this.tell = function (line) {
        console.log(this.type + ' told ' + '"' + line + '"');
    }
}
ManChills.prototype.babe = false;

var myChill = new ManChills('mybBE');
myChill.tell('lol bittt' + myChill.babe);

function Friends(type) {
    this.type = type;
}
Friends.prototype.speak = speak;
Friends.prototype.job = 'job';

var Ross = new Friends('Ross');
Ross.job = 'Paleontologist';
var Rachel = new Friends('Rachel');
Ross.speak('We were on a break!!!!');
Rachel.speak('No!!!!!, we weren\'t');

console.log(Object.getPrototypeOf(Ross));
console.log(Ross.job + '\n' + Rachel.job);

var map = {'pizza': 0.16};
console.log('toString' in map);

var noProtoMap = Object.create(null); // prototypeless object
noProtoMap['pizza'] = 0.16;
console.log('toString' in noProtoMap);

/*
 given an array of arrays of table cells, builds up a string that
 contains a nicely laid out table—meaning that the columns are straight and the rows are aligned
 */
console.log('\n----------------\n');

/*
 The first part of the program computes arrays of minimum column widths and row heights for a grid of cells.
 The rows variable will hold an array of arrays, with each inner array representing a row of cells
 */

function TextCell(text) {
    this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (currMinWidth, line) {
        return Math.max(currMinWidth, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
}

TextCell.prototype.draw = function (width, height) {
    var result = [];
    for(var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
}

function UnderLinedCell(inner) {
    this.inner = inner;
}

UnderLinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
}

UnderLinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
}

UnderLinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height-1).concat([repeat('-', width)]);
}

function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {// i - index of current element; _ indicates that current element is not used
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);
    
    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }
    
    function drawRow(row, rowNum) {
        var blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join('\n');
    }

    return rows.map(drawRow).join('\n');
}

function repeat(string, times) {
    var result = "";
    for(var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}


var rows = [];
for(var i = 0; i < 5; i++) {
    var row = [];
    for(var j = 0; j < 5; j++) {
        if((j+i)%2 == 0) {
            row.push(new TextCell('DD'));
        }else {
            row.push(new TextCell('CC'));
        }
    }
    rows.push(row);
}

console.log(drawTable(rows) + '\n');

var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
    module.exports = MOUNTAINS;

function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
    var result = [];
    for(var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
}

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderLinedCell(new TextCell(name));
    });

    var body = data.map(function (row) {
        return keys.map(function (name) {
            var value = row[name];
            if(typeof value == 'number') {
                return new RTextCell(String(row[name]));
            }else {
                return new TextCell(String(row[name]));
            }
        });
    });
    // console.log(body);
    return [headers].concat(body);
}
// console.log(dataTable(MOUNTAINS));
console.log(drawTable(dataTable(MOUNTAINS)));

// getters and setters

var pile= {
    elements: ['eggshell', 'orange peel', 'worm'],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log('ignore the attempt `:) to set value to ' + value);
    }
};

// pile.height = 1;

/*
A Vector Type: Write a constructor Vector that represents a vector in two-dimensional space.
 */
console.log('\n' + 'A Vector Type: Write a constructor Vector that represents a vector in two-dimensional space.' + '\n');

function testVector(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function (vectorObj) {
        if(vectorObj instanceof testVector) {
            return new testVector(this.x + vectorObj.x, this.y + vectorObj.y);
        }
    }
    this.minus = function (vectorObj) {
        if(vectorObj instanceof testVector) {
            return new testVector(this.x - vectorObj.x, this.y - vectorObj.y);
        }
    }
}

testVector.prototype.length = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

var vectorOne = new testVector(3, -4);
var vectorTwo = new testVector(4, 6);

console.log(vectorOne.length());

/*
Stretch Cell: implement a cell type named StretchCell(inner, width, height)
that conforms to the table cell interface described earlier in the chapter
It should wrap another cell (like UnderlinedCell does) and ensure that the resulting cell
has at least the given width and height, even if the inner cell would naturally be smaller
*/

console.log('\n' + 'Stretch Cell' + '\n');

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.kwidth = width;
    this.kheight = height;
}

StretchCell.prototype.minWidth = function () {
    return Math.max(this.inner.minWidth(), this.kwidth);
}

StretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight() + 1, this.kheight);
}

StretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height-1);
}

function dataTableStretch(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderLinedCell(new TextCell(name));
    });

    var body = data.map(function (row) {
        return keys.map(function (name) {
            var value = row[name];
            if(typeof value == 'number') {
                return new RTextCell(String(row[name]));
            }else {
                return new StretchCell(new TextCell(String(row[name])), 40, 3);
            }
        });
    });
    // console.log(body);
    return [headers].concat(body);
}

console.log(drawTable(dataTableStretch(MOUNTAINS)));

/*
    Sequence Interface: Design an interface that abstracts iteration over a collection of values
 */

console.log('\nSequence Interface:\n');

function sequenceInterface(anyObject) {
    this.iterableObj = anyObject;
    this.runIteration = function (method) {
        if(this.iterableObj instanceof Array) {
            for(var i = 0; i < this.iterableObj.length; i++) {
                method(this.iterableObj[i]);
            }
        }else if(this.iterableObj instanceof Object) {
            var keysArr = Object.keys(this.iterableObj);
            for(var i = 0; i < keysArr.length; i++) {
                method(this.iterableObj[keysArr[i]]);
            }
        }
    }
}

var arraySeq = new sequenceInterface([1,2,3,4]);
arraySeq.runIteration(function (obj) {
    console.log('obj = '+obj);
});

var mlmdm = {
    'm': 1,
    'a': 2,
    'p': 3
};

var objSeq = new sequenceInterface(mlmdm);
objSeq.runIteration(function (obj) {
    console.log('obj = '+obj);
});
