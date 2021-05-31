using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirstPractice.Models
{
    public class Grade
    {
        //one to many Example (using Convention 4)

        public int GradeId { get; set; }
        public string GradeName { get; set; }

        public ICollection<Student> Students { get; set; }
    }
}
