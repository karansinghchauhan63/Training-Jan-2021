using Practice.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models.Repository
{
    public class StudentRepository : IStudentRepositorycs
    {
        private readonly SchoolDBContext schoolDBContext;

        public StudentRepository(SchoolDBContext schoolDBContext)
        {
            this.schoolDBContext = schoolDBContext;
        }
        public void DeleteStudent(int id)
        {
            var data = schoolDBContext.Students.SingleOrDefault(a => a.Id == id);
            schoolDBContext.Remove(data);
            schoolDBContext.SaveChanges();
        }

        public IEnumerable<Student> GetAllStudents()
        {
            var data = schoolDBContext.Students;
            return data;
        }

        public IEnumerable<Student> GetStudentById(int id)
        {
            var data = schoolDBContext.Students.Where(a => a.Id == id);
            return data;
        }

        public void InsertStudent(Student student)
        {
            schoolDBContext.Students.Add(student);
            schoolDBContext.SaveChanges();
        }

        public void UpdateStudent(Student student, int id)
        {
            var data = schoolDBContext.Students.SingleOrDefault(a => a.Id == id);
            data.Name = student.Name;
            data.GradeId = student.GradeId;
            schoolDBContext.SaveChanges();
        }
    }
}
