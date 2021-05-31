using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Department
    {
        public Department()
        {
            HealthcareAssistants = new HashSet<HealthcareAssistant>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string Treatment { get; set; }

        public virtual ICollection<HealthcareAssistant> HealthcareAssistants { get; set; }
    }
}
