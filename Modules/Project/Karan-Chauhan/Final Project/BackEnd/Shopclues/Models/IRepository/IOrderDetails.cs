using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.IRepository
{
    public interface IOrderDetails
    {
        public IEnumerable<Order> GetMyOrders(int customerId);

        public void PlaceOrder(Order order);
    }
}
