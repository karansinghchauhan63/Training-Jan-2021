using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.IRepository
{
    public interface IOrdersRepository
    {
        public Order SearchOrder(int id);

        public void PlaceOrder(Order order);

    }
}
