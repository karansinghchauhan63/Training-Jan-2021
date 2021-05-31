//Array Concat Example
var alpha = ["a", "b", "c"];
var numeric = ["1", "2", "3"];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric);
//IndexOf Example
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index);
//Array Join Example
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str);
str = arr.join(", ");
console.log("str : " + str);
str = arr.join(" + ");
console.log("str : " + str);
//Pop Array Element
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element);
var element = numbers.pop();
console.log("element is : " + element);
//Push Array Element
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers);
length = numbers.push(20);
console.log("new numbers is : " + numbers);
//Array Reverse
var myarr = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + myarr);
//Sorted Array
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is : " + sorted);
//Array Splice
var arr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr.splice(2, 0, "water");
console.log("After adding 1: " + arr);
console.log("removed is: " + removed);
removed = arr.splice(3, 1);
console.log("After removing 1: " + arr);
console.log("removed is: " + removed);
