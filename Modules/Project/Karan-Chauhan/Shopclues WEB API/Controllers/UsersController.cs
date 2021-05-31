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
    public class UsersController : ControllerBase
    {
        private readonly IUsers users;

        public UsersController(IUsers users)
        {
            this.users = users;
        }

        [HttpGet]
        public ActionResult GetAllUsers()
        {
            try
            {
                return Ok(users.GetAllUsers());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpGet("{id}")]
        public ActionResult GetUserByID(string id)
        {
            try
            {
                return Ok(users.GetUserById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public ActionResult InsertUser(User user)
        {
            try
            {
                users.InsertUser(user);
                return Ok("User data inserted successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut]
        public ActionResult UpdateUser(User user, string id)
        {
            try
            {
                users.UpdateUser(user,id);
                return Ok("User data updated successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete]
        public ActionResult DeleteUser(string id)
        {
            try
            {
                users.DeleteUser(id);
                return Ok("User deleted successfully!");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
