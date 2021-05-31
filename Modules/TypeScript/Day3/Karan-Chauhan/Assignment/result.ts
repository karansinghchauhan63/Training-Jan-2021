namespace result {

    export interface IResult
    {
        CandidateName:string;
        ScoredMarks:number;
        QualifiedRounds:number;
        Result:string;
    }
    
    export var result:IResult[]=
    [
        {CandidateName:"Karan Singh",ScoredMarks:185,QualifiedRounds:4,Result:"Pending"},
        {CandidateName:"Raj Patel",ScoredMarks:205,QualifiedRounds:4,Result:"Pending"},
        {CandidateName:"James Thomas",ScoredMarks:90,QualifiedRounds:1,Result:"Pending"},
        {CandidateName:"Yash Panchal",ScoredMarks:125,QualifiedRounds:2,Result:"Pending"}
    
    ]
    
    export class CalculateResult {
        Result():void
        {
    
            for (const item of result) {
                var temp = result.filter(result=>result.CandidateName == item.CandidateName)[0];
                var resultstatus = result.indexOf(temp);
                if(item.QualifiedRounds==4)
                {            
                    result[resultstatus].Result = "Hired";
                }
                else
                {
                    result[resultstatus].Result = "Not Qualified";
                }
            }     
    
        }
    }
}
