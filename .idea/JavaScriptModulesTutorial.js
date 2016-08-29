/**
 * Created by krishnachaitanyaamjuri on 28/08/16.
 */

/* (function () {
    
    })(); Here, it declares a function and calls itself immediately. These are also known as immediately invoked function expressions */

var myFirstModule = (function () {

    var myPrivateMethod = function () {

    };

    var myObject = {
        publicMethod: function () {
            console.log("this is public now");
        },
        publicVal: "public val"
    };

    return myObject;
})(); // Here, we just created a namespace by naming the immediately invoked function expression

// javascript doesn't strictly have private methods

myFirstModule.publicMethod();
console.log(myFirstModule.publicVal);

var anotherModule = (function () {

    var privateArray = [];

    var updateInternal = function (something) {
        privateArray.push(something);
    };

    var getSize = function () {
        return privateArray.length;
    };

    return {
        update: updateInternal,
        length: getSize
    }
})();

anotherModule.update('Hello');
anotherModule.update(2);
anotherModule.update(4);
anotherModule.update(6);
anotherModule.update('World');

console.log(anotherModule.length());

// Extending Modules

var anotherModuleExtension = (function (anotherModule) {

    anotherModule.extension = function () {
        console.log('extension');
    }

    return anotherModule;
})(anotherModule);

anotherModule.extension();