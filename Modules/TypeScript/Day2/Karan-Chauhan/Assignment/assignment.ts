interface IInventory {
    ItemId:number;
    ItemName:string;
    Price:number;
    Quantity:number;
}

var items : IInventory[]=
[
    {ItemId:32, ItemName:"Laptop", Price:50000,Quantity:50},
    {ItemId:33, ItemName:"PC", Price:30000,Quantity:250},
    {ItemId:34, ItemName:"Mouse", Price:500,Quantity:350},
    {ItemId:35, ItemName:"Keyboard", Price:1000,Quantity:4}

]
class Inventory 
{
    Display():void
    {
        for(var data of items)
        {
            console.log(`ItemId: ${data.ItemId}`);
            console.log(`ItemName: ${data.ItemName}`);
            console.log(`Price: ${data.Price}`);
            console.log(`Quantity: ${data.Quantity}`);
            console.log("***********************************************************************");
        }
    }

    Purchase(Id:number, Qty: number):void
    {
        var quantity = items.filter(items=>items.ItemId==Id)[0];
        if(quantity.Quantity<5)
        {
            console.log("Less item available, please reorder!");
        }
        else
        {
            var idx = items.indexOf(quantity);
            console.log(idx);
            items[idx].Quantity=items[idx].Quantity-Qty;
            console.log("Order successfully placed!")
        }
    }
}

var inventoryfn = new Inventory();
inventoryfn.Display();
inventoryfn.Purchase(34,3);
inventoryfn.Display();
inventoryfn.Purchase(35,2);