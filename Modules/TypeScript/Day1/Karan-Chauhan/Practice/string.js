//CharAt Example
var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(1) is:" + str.charAt(1));
console.log("str.charAt(2) is:" + str.charAt(2));
console.log("str.charAt(3) is:" + str.charAt(3));
//String Concat Example
var str1 = new String("This is string one");
var str2 = new String("This is string two");
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : " + str3);
//indexOf Example
var str1 = new String("This is string one");
var index = str1.indexOf("string");
console.log("indexOf found String :" + index);
var index = str1.indexOf("one");
console.log("indexOf found String :" + index);
//replace Example
var re = /apples/gi;
str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr);
//Split Example
str = "Apples are round, and apples are juicy.";
var splitted = str.split(" ", 3);
console.log(splitted);
//substr Example
str = "Apples are round, and apples are juicy.";
console.log("(1,2): " + str.substr(1, 2));
console.log("(-2,2): " + str.substr(-2, 2));
console.log("(1): " + str.substr(1));
//toUpper Case Example
str = "Apples are round, and Apples are Juicy.";
console.log(str.toUpperCase());
//toLowerCase Example
str = "Apples are round, and Apples are Juicy.";
console.log(str.toLowerCase());
