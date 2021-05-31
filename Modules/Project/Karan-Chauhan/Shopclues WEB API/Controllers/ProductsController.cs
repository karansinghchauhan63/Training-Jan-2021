using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shopclues_WEB_API.Models;
using Shopclues_WEB_API.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProducts products;

        public ProductsController(IProducts products)
        {
            this.products = products;
        }

        [HttpGet]

        public ActionResult GetAllProducts()
        {
            try
            {
                return Ok(products.GetAllProducts());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("product/show/{category}")]

        public ActionResult GetByCategory(string category)
        {
            try
            {
                return Ok(products.GetByCategory(category));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]

        public ActionResult GetById(int id)
        {
            try
            {
                return Ok(products.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("product/{name}")]

        public ActionResult GetByProductName(string name)
        {
            try
            {
                return Ok(products.GetByProductName(name));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete]
        public ActionResult DeleteProduct(int id)
        {
            try
            {
                products.DeleteProduct(id);
                return Ok("Product is deleted!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut]
        public ActionResult InsertProduct(Product prod, int id)
        {
            try
            {
                products.UpdateProduct(prod,id);
                return Ok("Product data updated successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public ActionResult InsertProduct(Product prod)
        {
            try
            {
                products.InsertProduct(prod);
                return Ok("Product data inserted successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
