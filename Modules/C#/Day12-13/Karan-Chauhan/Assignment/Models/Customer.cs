using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public string Name { get; set; }

        public string Address { get; set; }

        public string ContactNo { get; set; }

        public ICollection<Orders> Orders { get; set; }

    }
}
