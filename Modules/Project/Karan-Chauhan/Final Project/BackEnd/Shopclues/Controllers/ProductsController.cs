using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopclues.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProduct iproduct;

        public ProductsController(IProduct iproduct)
        {
            this.iproduct = iproduct;
        }

        [HttpGet("{category}")]
        public ActionResult GetProductsByCategory(string category)
        {
            try
            {
                return Ok(iproduct.GetProductByCategory(category));
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
