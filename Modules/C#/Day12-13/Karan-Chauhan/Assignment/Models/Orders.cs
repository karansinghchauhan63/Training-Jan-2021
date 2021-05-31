using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Models
{
    public class Orders
    {
        [Key]
        public int OrderId { get; set; }

        public DateTime PurchaseTime { get; set; }

        public int Quantity { get; set; }

        public int ToyId { get; set; }
        public Toy Toy { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
