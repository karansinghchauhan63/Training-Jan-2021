/// <reference path ="interviewprocess.ts"/>
/// <reference path ="applicant.ts"/>
/// <reference path ="result.ts"/>
/// <reference path ="scheduling.ts"/>
/// <reference path ="vacancy.ts"/>

class Report {
    
    ShowReport(name:string):void
    {
        var fncall = new result.CalculateResult();
        fncall.Result();
        var flag:boolean=true;
        var counter:boolean=true;
        for (const item of applicant.applicantData) {

            if(item.Name==name)
            {
                counter=false;
                for (const x of result.result) {
                    if(x.Result=="Hired" && x.CandidateName==name)
                    {
                        console.log(`Candidate Name: ${item.Name}`);
                        console.log(`Job Designation: ${item.JobDesignation}`);
                        console.log(`Contact Number: ${item.ContactNumber}`);                        
                        console.log(`Education Qualification: ${item.Qualification}`);
                        console.log(`Experience: ${item.Experience}`);
                        console.log(`Expected Salary: ${item.ExpectedSalary}`);
                        console.log(`Interview Rounds Cleared: ${x.QualifiedRounds}`);
                        console.log(`Scored Marks: ${x.ScoredMarks}`);
                        console.log(`Selection: ${x.Result}`);
                        flag=false;
                    }
                }

                if(flag==true)
                {
                    console.log("You are not selected, good luck!");
                }
            }

        }
        if(counter==true)
        {
            console.log("Please apply for the interview process!");
        }
        
    }
}

var reportfn = new Report();
reportfn.ShowReport("Karan Singh");
reportfn.ShowReport("Yash Panchal");
reportfn.ShowReport("Thomas");