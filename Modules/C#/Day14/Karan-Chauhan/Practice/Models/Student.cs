using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GradeId { get; set; }

        public virtual Grade Grade { get; set; }
    }
}
