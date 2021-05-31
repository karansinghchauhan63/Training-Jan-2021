using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Toy
    {
        public Toy()
        {
            Orders = new HashSet<Order>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public string Category { get; set; }
        public double Amount { get; set; }
        public int ToyPlantId { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
