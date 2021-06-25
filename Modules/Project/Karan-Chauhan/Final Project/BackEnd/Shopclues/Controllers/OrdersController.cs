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
    public class OrdersController : ControllerBase
    {
        private readonly IOrderDetails orderDetails;

        public OrdersController(IOrderDetails orderDetails)
        {
            this.orderDetails = orderDetails;
        }

        [HttpGet("{customerid}")]

        public ActionResult GetMyOrders(int customerid)
        {
            try
            {
                return Ok(orderDetails.GetMyOrders(customerid));
            }
















































            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]

        public ActionResult PlaceOrder(Order order)
        {
            try
            {
                orderDetails.PlaceOrder(order);
                return Ok("Order Placed Successfully!");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
