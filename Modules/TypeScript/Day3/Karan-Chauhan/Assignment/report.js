var interviewprocess;
(function (interviewprocess) {
    var process = [
        { RoundNo: 1, Test: "MCQ Test", ConductedBy: "Mr. Mathews", QualifyingMarks: 50, TotalMarks: 100, TimeDuration: "1 hour" },
        { RoundNo: 2, Test: "Coding Round", ConductedBy: "Mr. Mathews", QualifyingMarks: 75, TotalMarks: 200, TimeDuration: "3 hour" },
        { RoundNo: 3, Test: "Technical Interview", ConductedBy: "Mr. Rajesh Verma", QualifyingMarks: 20, TotalMarks: 50, TimeDuration: "45 mins" },
        { RoundNo: 4, Test: "Personal Interview", ConductedBy: "Mr. Rakesh Mehra", QualifyingMarks: 20, TotalMarks: 50, TimeDuration: "15 mins" }
    ];
})(interviewprocess || (interviewprocess = {}));
var applicant;
(function (applicant) {
    applicant.applicantData = [
        { Name: "Karan Singh", JobDesignation: "Software Developer", Qualification: "B.Tech IT", Experience: "1 year", ExpectedSalary: 35000, ContactNumber: 99999999 },
        { Name: "Raj Patel", JobDesignation: "Graphics Designer", Qualification: "B.Des Graphics", Experience: "6 year", ExpectedSalary: 50000, ContactNumber: 99999889 },
        { Name: "James Thomas", JobDesignation: "Technical Engineer", Qualification: "M.Tech Electronics", Experience: "10 year", ExpectedSalary: 350000, ContactNumber: 78999999 },
        { Name: "Jayveer Singh", JobDesignation: "Software Developer", Qualification: "M.Tech IT", Experience: "7 year", ExpectedSalary: 90000, ContactNumber: 888899999 },
        { Name: "Jay Panchal", JobDesignation: "Software Developer", Qualification: "B.Tech IT", Experience: "4 year", ExpectedSalary: 35000, ContactNumber: 999977777 },
        { Name: "Yash Panchal", JobDesignation: "Graphics Designer", Qualification: "B.Tech Computer Science", Experience: "12 year", ExpectedSalary: 150000, ContactNumber: 99996789 }
    ];
})(applicant || (applicant = {}));
var result;
(function (result_1) {
    result_1.result = [
        { CandidateName: "Karan Singh", ScoredMarks: 185, QualifiedRounds: 4, Result: "Pending" },
        { CandidateName: "Raj Patel", ScoredMarks: 205, QualifiedRounds: 4, Result: "Pending" },
        { CandidateName: "James Thomas", ScoredMarks: 90, QualifiedRounds: 1, Result: "Pending" },
        { CandidateName: "Yash Panchal", ScoredMarks: 125, QualifiedRounds: 2, Result: "Pending" }
    ];
    class CalculateResult {
        Result() {
            for (const item of result_1.result) {
                var temp = result_1.result.filter(result => result.CandidateName == item.CandidateName)[0];
                var resultstatus = result_1.result.indexOf(temp);
                if (item.QualifiedRounds == 4) {
                    result_1.result[resultstatus].Result = "Hired";
                }
                else {
                    result_1.result[resultstatus].Result = "Not Qualified";
                }
            }
        }
    }
    result_1.CalculateResult = CalculateResult;
})(result || (result = {}));
var scheduling;
(function (scheduling) {
    scheduling.schedule = [
        { Date: "4 April, 2021", TimeSlot: "11AM-03PM", Address: "Odhav, Ahmedabad" },
        { Date: "7 April, 2021", TimeSlot: "9AM-05PM", Address: "Nikol, Ahmedabad" },
        { Date: "9 April, 2021", TimeSlot: "9AM-11AM", Address: "SG Highway, Ahmedabad" },
        { Date: "12 April, 2021", TimeSlot: "11AM-03PM", Address: "Bhopal, Ahmedabad" }
    ];
})(scheduling || (scheduling = {}));
var vacancy;
(function (vacancy) {
    ``;
    var jobs = [
        { DepartmentId: 101, DepartmentName: "Designing", JobDesignation: "Graphics Designer", Vacancy: 20 },
        { DepartmentId: 201, DepartmentName: "Development", JobDesignation: "Software Developer", Vacancy: 30 },
        { DepartmentId: 301, DepartmentName: "HR", JobDesignation: "HR Manager", Vacancy: 10 },
        { DepartmentId: 401, DepartmentName: "Networking", JobDesignation: "Technical Engineer", Vacancy: 5 },
        { DepartmentId: 501, DepartmentName: "Marketing", JobDesignation: "Marketing Executive", Vacancy: 20 }
    ];
})(vacancy || (vacancy = {}));
/// <reference path ="interviewprocess.ts"/>
/// <reference path ="applicant.ts"/>
/// <reference path ="result.ts"/>
/// <reference path ="scheduling.ts"/>
/// <reference path ="vacancy.ts"/>
class Report {
    ShowReport(name) {
        var fncall = new result.CalculateResult();
        fncall.Result();
        var flag = true;
        var counter = true;
        for (const item of applicant.applicantData) {
            if (item.Name == name) {
                counter = false;
                for (const x of result.result) {
                    if (x.Result == "Hired" && x.CandidateName == name) {
                        console.log(`Candidate Name: ${item.Name}`);
                        console.log(`Job Designation: ${item.JobDesignation}`);
                        console.log(`Contact Number: ${item.ContactNumber}`);
                        console.log(`Education Qualification: ${item.Qualification}`);
                        console.log(`Experience: ${item.Experience}`);
                        console.log(`Expected Salary: ${item.ExpectedSalary}`);
                        console.log(`Interview Rounds Cleared: ${x.QualifiedRounds}`);
                        console.log(`Scored Marks: ${x.ScoredMarks}`);
                        console.log(`Selection: ${x.Result}`);
                        flag = false;
                    }
                }
                if (flag == true) {
                    console.log("You are not selected, good luck!");
                }
            }
        }
        if (counter == true) {
            console.log("Please apply for the interview process!");
        }
    }
}
var reportfn = new Report();
reportfn.ShowReport("Karan Singh");
reportfn.ShowReport("Yash Panchal");
reportfn.ShowReport("Thomas");
