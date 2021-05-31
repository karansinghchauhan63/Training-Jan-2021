using Assignment.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToyController : ControllerBase
    {
        private readonly IToyRepository toyRepository;
        public ToyController(IToyRepository toyRepository)
        {
            this.toyRepository = toyRepository;
        }

        [HttpGet]
        public ActionResult GetAllToys()
        {
            try
            {
                return Ok(toyRepository.GetAllToys());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]
        public ActionResult GetToyById(int id)
        {
            try
            {
                return Ok(toyRepository.GetToyById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
