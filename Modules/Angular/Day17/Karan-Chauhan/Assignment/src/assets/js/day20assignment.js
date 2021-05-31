function addToCart(item){
    var list;
    var itemdata = item;
         
            list = JSON.parse(localStorage.getItem('productshow')) || [] ;
            if(list != []){
                alert(list);
                console.log(list[0]);
            }
            list.push(itemdata);
            var myJSON = JSON.stringify(list);
            localStorage.setItem('productshow',myJSON);
            console.log(itemdata);
            alert('Added to Cart!')
}

function cartSummary(){
    alert(localStorage.getItem("productshow"));
    console.log(localStorage.getItem("productshow"))
}

function item1() {
    var item = {"ProductId": 1, "ProductName": "Cheese", "Price": 100, "Quantity": 1 };
    addToCart(item);
}

function item2() {
    var item = {"ProductId": 2, "ProductName": "Pen", "Price": 150, "Quantity": 2 };
    addToCart(item);
}

function item3() {
    var item = {"ProductId": 3, "ProductName": "Butter", "Price": 100, "Quantity": 1 };
    addToCart(item);
}

function item4() {
    var item = {"ProductId": 4, "ProductName": "Pencil", "Price": 10, "Quantity": 1 };
    addToCart(item);
}


    
 