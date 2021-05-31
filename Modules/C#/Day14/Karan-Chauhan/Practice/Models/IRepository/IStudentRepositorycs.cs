using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models.IRepository
{
    public interface IStudentRepositorycs
    {
        IEnumerable<Student> GetAllStudents();
        IEnumerable<Student> GetStudentById(int id);

        public void DeleteStudent(int id);

        public void InsertStudent(Student student);

        public void UpdateStudent(Student student, int id);
    }
}
