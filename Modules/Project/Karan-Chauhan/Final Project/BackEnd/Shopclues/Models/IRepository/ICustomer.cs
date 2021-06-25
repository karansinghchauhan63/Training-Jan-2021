using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.IRepository
{
    public interface ICustomer
    {
        public IEnumerable<Customer> GetAllCustomers();

        public IEnumerable<Customer> GetCustomerById(int id);

        public void RegisterCustomer(Customer customer);

        public void UpdateCustomer(int id, Customer customer);

        public void DeleteCustomer(int id);
    }
}
