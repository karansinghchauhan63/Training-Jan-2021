using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Gender { get; set; }

        public string MaritalStatus { get; set; }

        public ICollection<Assignments> assignments { get; set; }

    }
}
