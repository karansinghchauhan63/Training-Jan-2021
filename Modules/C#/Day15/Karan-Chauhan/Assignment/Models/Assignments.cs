using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Assignments
    {
        [Key]
        public int AssignmentId { get; set; }

        public string AssignmentName { get; set; }

        public string AssignmentCategory { get; set; }

        public DateTime EndDate { get; set; }

        public string Grade { get; set; }

        public int EmployeeId { get; set; }
        public Employee employee { get; set; }
    }
}
