using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly ToyCompanyDBContext toyCompanyDBContext;
        public OrdersRepository(ToyCompanyDBContext toyCompanyDBContext)
        {
            this.toyCompanyDBContext = toyCompanyDBContext;
        }
        public void PlaceOrder(Order order)
        {
            toyCompanyDBContext.Orders.Add(order);
            toyCompanyDBContext.SaveChanges();
        }

        public Order SearchOrder(int id)
        {
            var data = toyCompanyDBContext.Orders.SingleOrDefault(a => a.OrderId == id);
            return data;
        }
    }
}
