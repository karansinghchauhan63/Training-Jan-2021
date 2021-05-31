using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ToyCompanyDBContext toyCompanyDBContext;
        public CustomerRepository(ToyCompanyDBContext toyCompanyDBContext)
        {
            this.toyCompanyDBContext = toyCompanyDBContext;
        }
        public void DeleteCustomer(int id)
        {
            var data = toyCompanyDBContext.Customers.SingleOrDefault(b => b.CustomerId == id);
            toyCompanyDBContext.Remove(data);
            toyCompanyDBContext.SaveChanges();
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            var data = toyCompanyDBContext.Customers;
            return data;
        }

        public Customer GetById(int id)
        {
            var data = toyCompanyDBContext.Customers.SingleOrDefault(b => b.CustomerId == id);
            return data;
        }

        public void InsertCustomer(Customer customer)
        {
            toyCompanyDBContext.Customers.Add(customer);
            toyCompanyDBContext.SaveChanges();
        }

        public void UpdateCustomer(Customer customer, int id)
        {
            var data = toyCompanyDBContext.Customers.SingleOrDefault(z => z.CustomerId == id);
            data.Name = customer.Name;
            data.Address = customer.Address;
            data.ContactNo = customer.ContactNo;
            toyCompanyDBContext.SaveChanges();
        }
    }
}
