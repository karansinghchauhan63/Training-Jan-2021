interface TableReservation
{
    BookingDate: string;
    BookingTime: string;
    TableNumber: number;
    Guests: number;
    TokenNumber:number;
    Available:boolean;
}

interface Table
{
    TableNumber : number,
    Seats : number
    Available : boolean
}

var TableData : TableReservation[] = 
[
    {
        BookingDate:"2021-05-01",
        BookingTime:"11:00 AM",
        TableNumber:3,
        Guests:2,
        TokenNumber : 1,
        Available : true
    }
]

var tables : Table[] = 
[
    {
        TableNumber:1,
        Seats:4,
        Available:true
    },
    {
        TableNumber:2,
        Seats:2,
        Available:true
    },
    {
        TableNumber:1,
        Seats:4,
        Available:false
    },

]
class OnlineTableReservation {

    DisplayTable():void {
        console.log(`---------------TABLE RESERVATION--------------`);
        for (const iterator of tables) {
            console.log(iterator);
        }
    }
    BookingTable(date:string,time:string,table:number,guests:number):void{
        var token:number = TableData.length + 100; 
        var booktable:any = 
        {
            BookingDate: date,
            BookingTime: time,
            TableNumber:table,
            Guests:guests,
            TokenNumber:token,
            Available:"Yes"
        };

        TableData.push(booktable);
        console.log("Booking completed! Token Number - "+token);
    }

}

var fncall = new OnlineTableReservation();
fncall.DisplayTable();
fncall.BookingTable("2021-05-12","12:OO PM",4,2);
