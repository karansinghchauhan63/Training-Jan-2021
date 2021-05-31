using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Models
{
    public class Toy
    {
        [Key]
        public int ToyId { get; set; }

        public string ToyName { get; set; }

        public string Category { get; set; }

        public double Amount { get; set; }

        public int ToyPlantId { get; set; }
        public ICollection<Orders> Orders { get; set; }


    }
}
