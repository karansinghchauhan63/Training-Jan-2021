using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.IRepository
{
    public interface IProduct
    {
        public IEnumerable<Product> GetProducts();

        public IEnumerable<Product> GetProductById(int id);

        public IEnumerable<Product> GetProductByCategory(string category);

        public void AddNewProduct(Product product);

        public void RemoveProduct(int id);

        public void EditProduct(int id, Product product);
    }
}
