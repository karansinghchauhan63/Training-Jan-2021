using Assignment.Authentication;
using Assignment.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.VisualStudio.Services.Notifications.VssNotificationEvent;

namespace Assignment.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class DrugController : ControllerBase
    {
        private readonly IDrugs idrugs;
        public DrugController(IDrugs idrugs)
        {
            this.idrugs = idrugs;
        }


        [Authorize(Roles = UserRoles.User)]
        [HttpGet("{id}")]

        public ActionResult GetMedicineList(int id)
        {
            try
            {
                return Ok(idrugs.GetMedicineList(id));
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
