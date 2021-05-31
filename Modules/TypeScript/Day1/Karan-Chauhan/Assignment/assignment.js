//Creating Array of 5 Employee Data
var EmployeeData = [
    { id: 1, FirstName: "Karan", LastName: "Singh", Address: "27 Flats,Ahmedabad,Gujarat", Salary: 50000 },
    { id: 2, FirstName: "Raj", LastName: "Panchal", Address: "35 Flats,Rajkot,Gujarat", Salary: 150000 },
    { id: 3, FirstName: "Jayveer", LastName: "Patel", Address: "45 Flats,Ahmedabad,Gujarat", Salary: 130000 },
    { id: 4, FirstName: "Bhargav", LastName: "Prajapati", Address: "29 Flats,Ahmedabad,Gujarat", Salary: 60000 },
    { id: 5, FirstName: "Narendra", LastName: "Modi", Address: "77 Flats,Ahmedabad,Gujarat", Salary: 50000 },
];
console.log("Data of 5 Employees:");
console.log(EmployeeData);
//Searching the Employee using EmployeeId 
console.log("------------------------------------------Displaying the Employee Details:------------------------------------------");
var j = 0;
var length = EmployeeData.length;
var index = 3;
var searchEmployee = EmployeeData.filter(function (EmployeeData) { return EmployeeData.id == index; })[0];
console.log("Id: " + searchEmployee.id + "\t\tFirstName: " + searchEmployee.FirstName + "\t\tLastName: " + searchEmployee.LastName + "\t\tAddress: " + searchEmployee.Address + "\t\tSalary: " + EmployeeData[j].Salary);
//Inserting Employee Data
var EmpInsert = { id: 6, FirstName: "Ram", LastName: "Patel", Address: "45 Plot,Rajkot,Ahmedabad", Salary: 75000 };
EmployeeData.push(EmpInsert);
console.log("After inserting new employee data:");
console.log(EmployeeData);
//Deleting Employee Data
console.log("After popping employee data:");
console.log(EmployeeData.pop());
var Emp = [
    { id: 7, FirstName: "James", LastName: "Singh", Address: "88 Flats,Ahmedabad,Gujarat", Salary: 50000 },
    { id: 8, FirstName: "Thomas", LastName: "Panchal", Address: "89 Flats,Rajkot,Gujarat", Salary: 150000 }
];
EmployeeData = EmployeeData.concat(Emp);
console.log("Concating two employee arrays:");
console.log(EmployeeData);
console.log("------------------------------------------Displaying the Employee Details:------------------------------------------");
var i = 0;
var fullname = "";
var pf = 0;
for (var _i = 0, EmployeeData_1 = EmployeeData; _i < EmployeeData_1.length; _i++) {
    var emp = EmployeeData_1[_i];
    pf = emp.Salary * (0.2);
    var address = emp.Address.split(",");
    console.log("Fullname: " + emp.FirstName + " " + emp.LastName + "\t\tFlat Number: " + address[0] + "\t\tCity: " + address[1] + "\t\tState: " + address[2] + "\t\tSalary: " + emp.Salary + "\t\tPF: " + pf);
}
