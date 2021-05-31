using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Doctor
    {
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string Departments { get; set; }
    }
}
