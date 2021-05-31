using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.IRepository
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomers();

        public Customer GetById(int id);
        public void InsertCustomer(Customer customer);

        public void UpdateCustomer(Customer customer, int id);

        public void DeleteCustomer(int id);
    }
}
