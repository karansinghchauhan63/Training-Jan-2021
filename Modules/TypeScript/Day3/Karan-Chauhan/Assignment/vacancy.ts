namespace vacancy
{
``
    export interface IVacancy 
    {
        DepartmentId:number;
        DepartmentName:string;
        JobDesignation:string;
        Vacancy:number;
    }

    var jobs:IVacancy[]=
    [
        {DepartmentId:101,DepartmentName:"Designing",JobDesignation:"Graphics Designer",Vacancy:20},
        {DepartmentId:201,DepartmentName:"Development",JobDesignation:"Software Developer",Vacancy:30},
        {DepartmentId:301,DepartmentName:"HR",JobDesignation:"HR Manager",Vacancy:10},
        {DepartmentId:401,DepartmentName:"Networking",JobDesignation:"Technical Engineer",Vacancy:5},
        {DepartmentId:501,DepartmentName:"Marketing",JobDesignation:"Marketing Executive",Vacancy:20}
    ]
}

