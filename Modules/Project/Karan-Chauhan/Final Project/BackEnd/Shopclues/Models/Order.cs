using System;
using System.Collections.Generic;

#nullable disable

namespace Shopclues.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public string ProductName { get; set; }
        public double AmountPaid { get; set; }
        public int Quantity { get; set; }
        public string DeliveryAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public int PinCode { get; set; }
        public string ContactNumber { get; set; }
        public DateTime PurchaseTime { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
