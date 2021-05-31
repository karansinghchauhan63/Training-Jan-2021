using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirstPractice.Models
{
    public class StudentAddress
    {
        //One to One Example

        public int StudentAddressId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public int SchoolId { get; set; }
        public School School { get; set; }
    }
}
