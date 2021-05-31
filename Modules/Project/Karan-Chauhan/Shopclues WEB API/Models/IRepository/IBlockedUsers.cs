using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.IRepository
{
    public interface IBlockedUsers
    {
        public IEnumerable<BlockedUser> GetAllBlockedUsers();

        public void UnblockUser(string id);

        public void BlockUser(BlockedUser blockedUser);
    }
}
