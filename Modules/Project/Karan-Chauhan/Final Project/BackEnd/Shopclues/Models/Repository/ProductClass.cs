using Shopclues.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues.Models.Repository
{
    public class ProductClass : IProduct
    {
        private readonly ShopcluesDBContext shopclues;
        public ProductClass(ShopcluesDBContext shopclues)
        {
            this.shopclues = shopclues;
        }
        public void AddNewProduct(Product product)
        {
            throw new NotImplementedException();
        }

        public void EditProduct(int id, Product product)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProductByCategory(string category)
        {
            var data = shopclues.Products.Where(s=>s.Category == category);
            return data;
        }

        public IEnumerable<Product> GetProductById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetProducts()
        {
            throw new NotImplementedException();
        }

        public void RemoveProduct(int id)
        {
            throw new NotImplementedException();
        }
    }
}
