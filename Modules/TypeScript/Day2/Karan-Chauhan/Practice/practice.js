//class Example
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
//creating object
var emp = new Employee(12, "Karan Singh Chauhan");
console.log(emp.getSalary());
//Declare a tuple
var a;
//Initialize it
a = ["hi", 8];
var employee;
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employee);
var code;
code = 123;
code = "ABC";
//code = false; // Compile error
function display(value) {
    if (typeof (value) === "number")
        console.log("Given value type - number");
    else if (typeof (value) === "string")
        console.log("Given value type - string");
}
display(123);
display("ABC");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
;
var c;
c = Color.Green;
var Employees = /** @class */ (function () {
    function Employees(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employees.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employees;
}());
var empy = new Employees(1, "Karan");
console.log(empy.getSalary(2000));
var kv1 = { key: 1, value: "Karan Singh Chauhan" };
var numArr = [1, 2, 3];
numArr[0];
numArr[1];
var empObj1 = {
    //OK
    empCode: 1,
    empName: "Karan"
};
var empObj = {
    empCode: 1,
    name: "Karan",
    gender: "Male"
};
//named fn with number as parameters type and return type
function add(a, b) {
    return a + b;
}
//anonymous fn with number as parameters type and return type
var sum = function (a, y) {
    return a + y;
};
