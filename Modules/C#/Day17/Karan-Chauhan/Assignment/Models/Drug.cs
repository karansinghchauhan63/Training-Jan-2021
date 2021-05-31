using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Drug
    {
        public string DrugName { get; set; }
        public string Amount { get; set; }
        public int AssistantId { get; set; }
        public int DoctorId { get; set; }
        public int PatientId { get; set; }
        public string Timing { get; set; }
        public int DrugId { get; set; }

        public virtual HealthcareAssistant Assistant { get; set; }
    }
}
