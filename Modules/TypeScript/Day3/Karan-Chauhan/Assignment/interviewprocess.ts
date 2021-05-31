namespace interviewprocess
{

    export interface IInterviewProcess
    {
        RoundNo:number;
        Test:string;
        ConductedBy:string;
        QualifyingMarks:number;
        TotalMarks:number;
        TimeDuration:string;
    }

    var process:IInterviewProcess[]=
    [
        {RoundNo:1,Test:"MCQ Test",ConductedBy:"Mr. Mathews",QualifyingMarks:50,TotalMarks:100,TimeDuration:"1 hour"},
        {RoundNo:2,Test:"Coding Round",ConductedBy:"Mr. Mathews",QualifyingMarks:75,TotalMarks:200,TimeDuration:"3 hour"},
        {RoundNo:3,Test:"Technical Interview",ConductedBy:"Mr. Rajesh Verma",QualifyingMarks:20,TotalMarks:50,TimeDuration:"45 mins"},
        {RoundNo:4,Test:"Personal Interview",ConductedBy:"Mr. Rakesh Mehra",QualifyingMarks:20,TotalMarks:50,TimeDuration:"15 mins"}
    ]
}