/**
 * Created by krishnachaitanyaamjuri on 11/08/16.
 */
var a = 0;
var b = 1;
var c = a/b;
var d = "Baby";
var e = 'Baby' < 'baby'; // uppercase letters are always less than lower case letters
var f = e ? "upper" : "lower";

// type coercion in java is unpredictable
console.log('Hello world, here\'s the value of c: ' + c);
console.log('Type of e: ' + typeof e);
console.log('String comparision is based on unicode standard: ' + e);
console.log('f value: ' + f);
console.log('undefined type check: ' + (null == 0));
// short-circuit evaluation - for || if expression on right is empty, then expression on left is used. otherwise expression on right is used
console.log(null || "baby");
console.log(null && "baby");
console.log('karl' || 'baby');
console.log('karl' && 'baby');

