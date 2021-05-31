using Shopclues_WEB_API.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.Repository
{
    public class Users : IUsers
    {
        private readonly SHOPCLUESContext shopclues;
        public Users(SHOPCLUESContext shopclues)
        {
            this.shopclues = shopclues;
        }
        public void DeleteUser(string id)
        {
            var data = shopclues.Users.Single(x => x.EmailId == id);
            shopclues.SaveChanges();
        }

        public IEnumerable<User> GetAllUsers()
        {
            var data = shopclues.Users;
            return data;
        }

        public IEnumerable<User> GetUserById(string id)
        {
            var data = shopclues.Users.Where(x => x.EmailId == id);
            return data;
        }

        public void InsertUser(User user)
        {
            shopclues.Users.Add(user);
            shopclues.SaveChanges();
        }

        public void UpdateUser(User user, string id)
        {
            var data = shopclues.Users.SingleOrDefault(x => x.EmailId == id);
            data.Username = user.Username;
            data.ContactNumber = user.ContactNumber;
            data.Password = user.Password;
            shopclues.SaveChanges();
        }
    }
}
