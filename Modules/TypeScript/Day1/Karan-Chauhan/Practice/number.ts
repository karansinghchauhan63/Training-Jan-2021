//Datatype Example
let myname:string = "Karan Singh Chauhan";
let mystatus:boolean = true;

console.log(myname);
console.log(mystatus);

//Number Example

let first:number = 123; // number 
let second:number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth:number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

//toExponential() 
var num1 = 1225.30 
var val = num1.toExponential(); 
console.log(val)

//toPrecision

var num = new Number(7.123456); 
console.log(num.toPrecision()); 
console.log(num.toPrecision(1)); 
console.log(num.toPrecision(2));

//toString
num = new Number(10); 
console.log(num.toString()); 
console.log(num.toString(2)); 
console.log(num.toString(8));

//valueOf
var num = new Number(10); 
console.log(num.valueOf());