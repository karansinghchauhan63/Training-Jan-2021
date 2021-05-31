using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Assignment.Models
{
    public partial class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string Departments { get; set; }
    }
}
