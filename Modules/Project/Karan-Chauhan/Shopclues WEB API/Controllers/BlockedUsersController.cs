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
    public class BlockedUsersController : ControllerBase
    {
        private readonly IBlockedUsers blockedUsers;

        public BlockedUsersController(IBlockedUsers blockedUsers)
        {
            this.blockedUsers = blockedUsers;
        }

        [HttpGet]

        public ActionResult GetAllBlockedUsers()
        {
            try
            {
                return Ok(blockedUsers.GetAllBlockedUsers());
            }
            catch
            {
                return BadRequest();
            }
        }



        [HttpPost]

        public ActionResult BlockUser(BlockedUser user)
        {
            try
            {
                blockedUsers.BlockUser(user);
                return Ok("User blocked!");
            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpDelete]

        public ActionResult UnblockUser(string id)
        {
            try
            {
                blockedUsers.UnblockUser(id);
                return Ok("User unblocked!");
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
