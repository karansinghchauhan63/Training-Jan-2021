export interface Order
{
    orderId?:number,
    productId:number,
    customerId:number,
    productName:string,
    amountPaid:number,
    quantity:number,
    deliveryAddress:string,
    city:string,
    state:string,
    country:string,
    pinCode:number,
    contactNumber:string,
    purchaseTime:Date
    
}