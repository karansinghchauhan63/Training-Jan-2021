using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Student
    {
        public Student()
        {
            Courses = new HashSet<Course>();
        }

        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string Standard { get; set; }
        public string Address { get; set; }
        public string ContactNo { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
    }
}
