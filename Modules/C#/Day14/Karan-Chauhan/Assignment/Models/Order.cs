using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public DateTime PurchaseTime { get; set; }
        public int Quantity { get; set; }
        public int ToyId { get; set; }
        public int CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
