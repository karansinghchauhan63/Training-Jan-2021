using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Models
{
    public class ToyCompanyPlant
    {
        [Key]
        public int ToyPlantId { get; set; }

        public string ToyPlantName { get; set; }

        public string Location { get; set; }

    }
}
