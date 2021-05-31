using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment.Controllers
{
    [Route("emps")]
    [ApiController]
    public class EmployeeAssignmentController : ControllerBase
    {
        protected readonly EmployeeAssignmentContext context;
        public EmployeeAssignmentController(EmployeeAssignmentContext ctx)
        {
            context = ctx;
        }
        // GET: api/<EmployeeAssignmentController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var data = context.Employees;
            return data;
        }

        // GET api/<EmployeeAssignmentController>/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            
                var data = context.Employees.SingleOrDefault(S => S.EmployeeId == id);
                return data;      

        }
     
                [HttpGet("{id}/child/Assignments")]
               public ActionResult GetAssignment(int id)
                {
                    var data = context.Assignments.Where(S => S.employee.EmployeeId == id);
                    return Ok(data);

                }

        [HttpGet("{id}/child/Assignments/{assignmentid}")]
        public ActionResult GetById(int id, int assignmentid)
        {
            var data = context.Assignments.Where(s => s.EmployeeId == id && s.AssignmentId == assignmentid);
            if( data == null)
            {
                return BadRequest("Data is not available!");
            }
            else
            {
                return Ok(data);
            }
          
        }

        [HttpPut("{id}/child/Assignments/{assignmentid}")]

        public ActionResult UpdateById(int id, int assignmentid, Assignments assignments)
        {
            var olddata = context.Assignments.SingleOrDefault(s => s.EmployeeId == id && s.AssignmentId == assignmentid);
            if(olddata == null)
            {
                return BadRequest("Data not found!");
            }
            else
            {
                olddata.AssignmentName = assignments.AssignmentName;
                olddata.AssignmentCategory = assignments.AssignmentCategory;
                olddata.EndDate = assignments.EndDate;
                olddata.Grade = assignments.Grade;
                context.SaveChanges();
                return Ok("Data is updated");
            }
        }
        // POST api/<EmployeeAssignmentController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmployeeAssignmentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeeAssignmentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
