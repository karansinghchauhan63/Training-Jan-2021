using Assignment.Models;
using Assignment.Models.IRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository customerRepository;
        public CustomerController(ICustomerRepository customerRepo)
        {
            customerRepository = customerRepo;
        }
        // GET: api/<CustomerController>
        [HttpGet]
        public ActionResult GetAllCustomers()
        {
            try
            {
                return Ok(customerRepository.GetAllCustomers());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        {
            try
            {
                return Ok(customerRepository.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        // POST api/<CustomerController>
        [HttpPost]
        public ActionResult InsertCustomer(Customer customer)
        {
            try
            {
                customerRepository.InsertCustomer(customer);
                return Ok("Inserted Successfully!");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public ActionResult UpdateCustomer(Customer customer, int id)
        {
            try
            {
                customerRepository.UpdateCustomer(customer, id);
                return Ok("Updated Successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            try
            {
                customerRepository.DeleteCustomer(id);
                return Ok("Deleted Successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
