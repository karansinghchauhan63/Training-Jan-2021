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
    public class ReportController : ControllerBase
    {
        private readonly IPatient ipatient;

        public ReportController(IPatient ipatient)
        {
            this.ipatient = ipatient;
        }

        [HttpGet("{name}")]
        public ActionResult GetReport(string name)
        {
            try
            {
                return Ok(ipatient.GetReport(name));
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

       [HttpGet("hospital/{patientname}")]
        public ActionResult GetSummaryReport(string patientname)
        {
                          
            try
            {
                return Ok(ipatient.GetSummaryReport(patientname));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
    
    }
}
