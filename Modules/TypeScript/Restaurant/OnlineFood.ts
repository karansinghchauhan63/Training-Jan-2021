interface Menu {
    Id:number,
    FoodItem: string,
    TypeofFood:string,
    Price:number,
    Servings:number
}

var menuData:Menu[]=
[
    {
        Id:1,
        FoodItem:"Cheese Cake",
        TypeofFood:"Veg",
        Price:450,
        Servings:2
    },
    {
        Id:2,
        FoodItem:"Icecream",
        TypeofFood:"Veg",
        Price:50,
        Servings:1
    },
    {
        Id:3,
        FoodItem:"Chinese Cuisine",
        TypeofFood:"Nonveg",
        Price:850,
        Servings:4
    },
    {
        Id:4,
        FoodItem:"Indian Cuisine",
        TypeofFood:"Veg",
        Price:1450,
        Servings:4
    },

]

interface Order {
    CustomerName: string,
    Address: string,
    ContactNumber: number,
    OrderId:number,
    FoodId:number
    BookingTime: number,
    Amount:number
}

var date = new Date();
var orderData : Order [] =
[
    {
        CustomerName:"Karan",
        Address:"343 Plot",
        ContactNumber:99999,
        OrderId:201,
        FoodId:3,
        BookingTime: Date.now(),
        Amount:850
    }
]

class OnlineFood
{
    DisplayMenu():void{
        console.log(`----------WELCOME TO FOOD MANIA----------`);
        for (const item of menuData) {
            console.log(`Food Id: ${item.Id}`);
            console.log(`Food Item: ${item.FoodItem}`);
            console.log(`Type: ${item.TypeofFood}`);
            console.log(`Price: ${item.Price}`);
            console.log(`Servings: ${item.Servings}`);
        }
    }

    OrderFood(name:string,address:string,cno:number,foodid:number):void{
        var ordId = orderData.length + 200;
        var amtobj = menuData.filter(menuData => menuData.Id == foodid)[0];
        var order = {
            CustomerName:name,
            Address:address,
            ContactNumber:cno,
            OrderId:ordId,
            FoodId:foodid,
            BookingTime:Date.now(),
            Amount:amtobj.Price
        }
        orderData.push(order);
        console.log('Order placed successfully: Token is - '+ordId);

        console.log(`----------------Order Details----------------`);
        for (const item of orderData) {
            if(item.OrderId == ordId)
            console.log(item);
        }
    }
}

var fncall = new OnlineFood();
fncall.DisplayMenu();
fncall.OrderFood("Karan Singh","D-12 Naroda",989898,2);

