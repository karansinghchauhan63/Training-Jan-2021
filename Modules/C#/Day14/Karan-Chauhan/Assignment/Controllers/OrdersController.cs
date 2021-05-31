using Assignment.Models;
using Assignment.Models.IRepository;
using Assignment.Models.Repository;
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
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersRepository orderRepository;
        public OrdersController(IOrdersRepository ordersRepository)
        {
            orderRepository = ordersRepository;
        }

        [HttpGet("{id}")]

        public ActionResult SearchOrder(int id)
        {
            try
            {
                return Ok(orderRepository.SearchOrder(id));
            }
            catch(Exception e)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        
        public ActionResult PlaceOrder(Order order)
        {
            try
            {
                orderRepository.PlaceOrder(order);
                return Ok("Order placed successfully!");
            }
            catch(Exception e)
            {
                return BadRequest();
            }
        }
    }
}
