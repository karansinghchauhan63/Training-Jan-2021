using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class HealthcareAssistant
    {
        public int AssistantId { get; set; }
        public string AssistantName { get; set; }
        public int DepartmentId { get; set; }
        public int Experience { get; set; }

        public virtual Department Department { get; set; }
    }
}
