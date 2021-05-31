using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int Price { get; set; }
        public int StudentId { get; set; }

        public virtual Student Student { get; set; }
    }
}
