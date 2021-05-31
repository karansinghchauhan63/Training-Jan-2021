//class Example
class Employee {
    empCode: number;
    empName: string;

    constructor(code:number, name:string)
    {
        this.empName = name;
        this.empCode =code;
    }

    getSalary(): number{
        return 10000;
    }
}

//creating object
let emp = new Employee(12, "Karan Singh Chauhan");
console.log(emp.getSalary());


//Declare a tuple
let a: [string, number];

//Initialize it
a = ["hi", 8]; 

var employee: [number, string][];
employee = [[1,"Steve"],[2,"Bill"],[3,"Jeff"]];
console.log(employee);

let code: (string | number);
code = 123;
code = "ABC";
//code = false; // Compile error

function display(value: (number | string))
{
    if(typeof(value) === "number")
        console.log("Given value type - number");
    else if(typeof(value) === "string")
        console.log("Given value type - string");
}

display(123);
display("ABC");

enum Color { Red, Green, Blue, Yellow};
let c: Color;
c = Color.Green;

interface IEmployee {
    empCode:number,
    name:string;
    getSalary:(number)=>number;
}

class Employees implements IEmployee {

    empCode:number;
    name:string;

    constructor(code:number, name:string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number{
        return 20000;
    }
}

let empy = new Employees(1,"Karan");
console.log(empy.getSalary(2000));


interface KeyPair {
    key:number;
    value:string;
}

let kv1 : KeyPair = {key:1, value:"Karan Singh Chauhan"};

interface NumList
{
    [index:number]:number
}

let numArr: NumList = [1,2,3];
numArr[0];
numArr[1];


interface IEmployees {
    empCode:number;
    empName:string;
   // empDept?:string;//optional
   // readonly SSN: number;//readonly
}

let empObj1:IEmployees = {
    //OK
    empCode:1,
    empName:"Karan"
}

interface IPerson {
    name: string;
    gender: string;
}

interface IEmpl extends IPerson{
    empCode: number;
}

let empObj:IEmpl = {
    empCode:1,
    name:"Karan",
    gender:"Male"
}


//named fn with number as parameters type and return type

function add(a:number, b:number):number {
    return a + b;
}



//anonymous fn with number as parameters type and return type
let sum = function(a:number, y:number):number {
    return a+y;
}