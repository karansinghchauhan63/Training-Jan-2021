interface Employee {
    Id:number;
    Name:string;
    City:string;
    DOJ:string;
}

var EmpData : Employee[]=
[
    {
        Id:1,
        Name:"Karan",
        City:"Mumbai",
        DOJ:"2021-2-1"
    },
    {
        Id:2,
        Name:"James",
        City:"Mumbai",
        DOJ:"2021-3-1"
    },
    {
        Id:3,
        Name:"Kartik",
        City:"Delhi",
        DOJ:"2019-2-1"
    },
    {
        Id:4,
        Name:"Mohan",
        City:"Delhi",
        DOJ:"2020-2-1"
    },
    {
        Id:5,
        Name:"Yash",
        City:"Mumbai",
        DOJ:"2021-4-10"
    }

]

class Emp {
    GetEmployeeById(Id:number):void{
        let map=new Map();
        for (const emp of EmpData) {
            map.set(emp.Id,emp);
        }
        if(map.has(Id)==true)
        {
            var findemp = map.get(Id);
            console.log(findemp);
        }
        else
        {
            console.log("Employee Record not found!");
        }
    }


    SearchByYear(year:number):void{
        let map = new Map();
        let doj : Date;
        var flag = true;

        for (const emp of EmpData) {
            map.set(emp.Id, emp);
            doj = new Date(emp.DOJ);

            if (doj.getFullYear() > year){
                console.log(`Employee Id: ${emp.Id}`);
                console.log(`Employee Name: ${emp.Name}`);
                console.log(`Date of Joining: ${emp.DOJ}`);
                console.log(`City: ${emp.City}`);
                console.log(`***********************************************************************`);
                flag=false;
            }
        }
        if(flag==true){
            console.log('Record is empty!');
        }

    }

    SearchByCity(year:number, city:string):void{
        let map = new Map();
        let doj : Date;
        var flag = true;

        for (const emp of EmpData) {
            map.set(emp.Id, emp);
            doj = new Date(emp.DOJ);

            if (doj.getFullYear() > year && emp.City == city){
                console.log(`Employee Id: ${emp.Id}`);
                console.log(`Employee Name: ${emp.Name}`);
                console.log(`Date of Joining: ${emp.DOJ}`);
                console.log(`City: ${emp.City}`);
                console.log(`***********************************************************************`);
                flag=false;
            }
        }
        if(flag==true){
            console.log('Record is empty!');
        }

    }
}

var fncall = new Emp();
fncall.GetEmployeeById(2);
fncall.SearchByYear(2020);
fncall.SearchByCity(2020,"Mumbai");