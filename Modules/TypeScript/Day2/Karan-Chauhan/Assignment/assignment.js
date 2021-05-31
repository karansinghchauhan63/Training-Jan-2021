var items = [
    { ItemId: 32, ItemName: "Laptop", Price: 50000, Quantity: 50 },
    { ItemId: 33, ItemName: "PC", Price: 30000, Quantity: 250 },
    { ItemId: 34, ItemName: "Mouse", Price: 500, Quantity: 350 },
    { ItemId: 35, ItemName: "Keyboard", Price: 1000, Quantity: 4 }
];
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.Display = function () {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var data = items_1[_i];
            console.log("ItemId: " + data.ItemId);
            console.log("ItemName: " + data.ItemName);
            console.log("Price: " + data.Price);
            console.log("Quantity: " + data.Quantity);
            console.log("***********************************************************************");
        }
    };
    Inventory.prototype.Purchase = function (Id, Qty) {
        var quantity = items.filter(function (items) { return items.ItemId == Id; })[0];
        if (quantity.Quantity < 5) {
            console.log("Less item available, please reorder!");
        }
        else {
            var idx = items.indexOf(items.filter(function (items) { return items.ItemId == Id; })[0]);
            console.log(idx);
            items[idx].Quantity = items[idx].Quantity - Qty;
            console.log("Order successfully placed!");
        }
    };
    return Inventory;
}());
var inventoryfn = new Inventory();
inventoryfn.Display();
inventoryfn.Purchase(34, 3);
inventoryfn.Display();
inventoryfn.Purchase(35, 2);
