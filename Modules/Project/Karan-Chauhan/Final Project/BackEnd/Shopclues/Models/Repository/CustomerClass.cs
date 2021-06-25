using Shopclues.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.Repository
{
    public class CustomerClass : ICustomer
    {
        private readonly ShopcluesDBContext shopclues;

        public CustomerClass(ShopcluesDBContext shopclues)
        {
            this.shopclues = shopclues;
        }
      
        public void DeleteCustomer(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return shopclues.Customers;
        }

   
        public IEnumerable<Customer> GetCustomerById(int id)
        {
            throw new NotImplementedException();
        }       

        public void RegisterCustomer(Customer customer)
        {
            shopclues.Customers.Add(customer);
            shopclues.SaveChanges();
        }

        public void UpdateCustomer(int id, Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
