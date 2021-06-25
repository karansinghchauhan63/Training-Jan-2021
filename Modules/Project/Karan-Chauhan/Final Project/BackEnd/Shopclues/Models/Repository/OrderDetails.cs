using Shopclues.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.Repository
{
    public class OrderDetails : IOrderDetails
    {
        private readonly ShopcluesDBContext shopclues;

        public OrderDetails(ShopcluesDBContext shopclues)
        {
            this.shopclues = shopclues;
        }
        public IEnumerable<Order> GetMyOrders(int customerId)
        {
            var orderdata = shopclues.Orders.Where(s => s.CustomerId == customerId);
            return orderdata;
        }

        public void PlaceOrder(Order order)
        {
            shopclues.Orders.Add(order);
            shopclues.SaveChanges();
        }
    }
}
