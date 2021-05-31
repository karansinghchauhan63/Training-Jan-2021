using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.IRepository
{
    public interface IUsers
    {
        public void InsertUser(User user);

        public IEnumerable<User> GetAllUsers();

        public IEnumerable<User> GetUserById(string id);

        public void UpdateUser(User user, string id);

        public void DeleteUser(string id);
    }
}
