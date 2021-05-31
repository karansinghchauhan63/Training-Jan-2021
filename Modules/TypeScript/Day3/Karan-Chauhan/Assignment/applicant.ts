namespace applicant
{
    export interface IApplicant
    {
        Name:string;
        JobDesignation:string;
        Qualification:string;
        Experience:string;
        ExpectedSalary:number;
        ContactNumber:number;
    }


    export var applicantData:IApplicant[]=
    [
        {Name:"Karan Singh",JobDesignation:"Software Developer",Qualification:"B.Tech IT",Experience:"1 year",ExpectedSalary:35000,ContactNumber:99999999},
        {Name:"Raj Patel",JobDesignation:"Graphics Designer",Qualification:"B.Des Graphics",Experience:"6 year",ExpectedSalary:50000,ContactNumber:99999889},
        {Name:"James Thomas",JobDesignation:"Technical Engineer",Qualification:"M.Tech Electronics",Experience:"10 year",ExpectedSalary:350000,ContactNumber:78999999},
        {Name:"Jayveer Singh",JobDesignation:"Software Developer",Qualification:"M.Tech IT",Experience:"7 year",ExpectedSalary:90000,ContactNumber:888899999},
        {Name:"Jay Panchal",JobDesignation:"Software Developer",Qualification:"B.Tech IT",Experience:"4 year",ExpectedSalary:35000,ContactNumber:999977777},
        {Name:"Yash Panchal",JobDesignation:"Graphics Designer",Qualification:"B.Tech Computer Science",Experience:"12 year",ExpectedSalary:150000,ContactNumber:99996789}

    ]
}