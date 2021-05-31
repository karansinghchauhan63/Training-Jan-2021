using Shopclues_WEB_API.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shopclues_WEB_API.Models.Repository
{
    public class Products : IProducts
    {
        private readonly SHOPCLUESContext shopclues;
        public Products(SHOPCLUESContext shopclues)
        {
            this.shopclues = shopclues;
        }
        public void DeleteProduct(int id)
        {
            var product = shopclues.Products.SingleOrDefault(x => x.ProductId == id);
            shopclues.Products.Remove(product);
            shopclues.SaveChanges();
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return shopclues.Products;
        }

        public IEnumerable<Product> GetByCategory(string category)
        {
            var data = shopclues.Products.Where(x => x.Category == category);
            return data;
        }

        public IEnumerable<Product> GetById(int id)
        {
            var data = shopclues.Products.Where(x => x.ProductId == id);
            return data;
        }

        public IEnumerable<Product> GetByProductName(string name)
        {
            var data = shopclues.Products.Where(x => x.ProductName == name);
            return data;

        }

        public void InsertProduct(Product product)
        {
            shopclues.Products.Add(product);
            shopclues.SaveChanges();
        }

        public void UpdateProduct(Product product, int id)
        {
            var data = shopclues.Products.SingleOrDefault(x => x.ProductId == id);
            data.Price = product.Price;
            data.Description = product.Description;
            shopclues.SaveChanges();
        }
    }
}
