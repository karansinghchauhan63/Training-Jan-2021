namespace scheduling
{
    export interface IScheduling
    {
        Date:string;
        TimeSlot:string;
        Address:string;        
    }

    export var schedule:IScheduling[]=
    [
        {Date:"4 April, 2021",TimeSlot:"11AM-03PM",Address:"Odhav, Ahmedabad"},
        {Date:"7 April, 2021",TimeSlot:"9AM-05PM",Address:"Nikol, Ahmedabad"},
        {Date:"9 April, 2021",TimeSlot:"9AM-11AM",Address:"SG Highway, Ahmedabad"},
        {Date:"12 April, 2021",TimeSlot:"11AM-03PM",Address:"Bhopal, Ahmedabad"}
    ]
}