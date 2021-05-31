using Shopclues_WEB_API.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.Repository
{
    public class BlockedUsers : IBlockedUsers
    {
        private readonly SHOPCLUESContext shopclues;
        public BlockedUsers(SHOPCLUESContext shopclues)
        {
            this.shopclues = shopclues;
        }
        public void BlockUser(BlockedUser blockedUser)
        {
            shopclues.BlockedUsers.Add(blockedUser);
            shopclues.SaveChanges();
        }

        public IEnumerable<BlockedUser> GetAllBlockedUsers()
        {
            var data = shopclues.BlockedUsers;
            return data;
        }

        public void UnblockUser(string id)
        {
            var blockedUser = shopclues.BlockedUsers.SingleOrDefault(x => x.EmailId == id);
            shopclues.BlockedUsers.Remove(blockedUser);
            shopclues.SaveChanges();
        }
    }
}
