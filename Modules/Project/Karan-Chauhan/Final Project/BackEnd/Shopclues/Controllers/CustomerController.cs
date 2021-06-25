using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopclues.Models;
using Shopclues.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomer icustomer;

        public CustomerController(ICustomer icustomer)
        {
            this.icustomer = icustomer;
        }

        [HttpPost]
        public ActionResult RegisterCustomer(Customer customer)
        {
            try
            {
                icustomer.RegisterCustomer(customer);
                return Ok("User registered successfully!");
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet]

        public ActionResult GetAllCustomers()
        {
            try
            {
                return Ok(icustomer.GetAllCustomers());
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
