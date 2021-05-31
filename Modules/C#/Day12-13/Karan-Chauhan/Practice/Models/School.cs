using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirstPractice.Models
{
    public class School
    {
        //One to One Example
        public int Id { get; set; }
        public string Name { get; set; }

        public StudentAddress Address { get; set; }
    }
}
