using Assignment.Authentication;
using Assignment.Models;
using Assignment.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {

        private readonly IDoctor idoctor;
        public DoctorController(IDoctor idoctor)
        {
            this.idoctor = idoctor;
        }

        [HttpPost]
        public ActionResult InsertDoctor(Doctor doctor)
        {
            try
            {
                idoctor.InsertDoctor(doctor);
                return Ok("Doctor record inserted successfully!");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpPut]

        public ActionResult UpdateDoctor(Doctor doctor, int id)
        {
            try
            {
                idoctor.UpdateDoctor(doctor,id);
                return Ok("Doctor record updated successfully!");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpDelete]
        public ActionResult DeleteDoctor(int id)
        {
            try
            {
                idoctor.DeleteDoctor(id);
                return Ok("Doctor record deleted successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
