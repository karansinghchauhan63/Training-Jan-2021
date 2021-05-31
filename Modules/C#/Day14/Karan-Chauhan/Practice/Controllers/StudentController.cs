using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice.Models;
using Practice.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepositorycs studentrepository;

        public StudentController(IStudentRepositorycs studentRepo)
        {
            studentrepository = studentRepo;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            try
            {
                return Ok(studentrepository.GetAllStudents());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]

        public ActionResult GetById(int id)
        {
            try
            {
                return Ok(studentrepository.GetStudentById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]

        public ActionResult InsertStudent(Student student)
        {
            try
            {
                studentrepository.InsertStudent(student);
                return Ok("Student is Registered Successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateStudent(Student student, int id)
        {
            try
            {
                studentrepository.UpdateStudent(student, id);
                return Ok("Student data is updated successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteStudent(int id)
        {
            try
            {
                studentrepository.DeleteStudent(id);
                return Ok("Student data is deleted successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
