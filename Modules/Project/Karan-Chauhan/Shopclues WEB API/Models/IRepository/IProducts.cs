using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.IRepository
{
    public interface IProducts
    {
        public IEnumerable<Product> GetAllProducts();

        public IEnumerable<Product> GetById(int id);

        public IEnumerable<Product> GetByProductName(string name);

        public IEnumerable<Product> GetByCategory(string category);

        public void InsertProduct(Product product);

        public void UpdateProduct(Product product, int id);

        public void DeleteProduct(int id);
    }
}
