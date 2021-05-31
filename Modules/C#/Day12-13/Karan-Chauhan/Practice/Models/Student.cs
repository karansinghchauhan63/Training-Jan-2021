using CodeFirstPractice.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirstPractice
{
    public class Student
    {
        //one to many Example (using Convention 4)
        public int Id { get; set; }
        public string Name { get; set; }

        public int GradeId { get; set; }
        public Grade Grade { get; set; }

    }
}
