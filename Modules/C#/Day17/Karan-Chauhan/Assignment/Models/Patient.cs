using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Patient
    {
        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public string HealthIssue { get; set; }
        public string Treatment { get; set; }
        public int DoctorId { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
