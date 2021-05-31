using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class ToyRepository : IToyRepository
    {
        private readonly ToyCompanyDBContext toyCompanyDBContext;
        public ToyRepository(ToyCompanyDBContext toyCompanyDBContext)
        {
            this.toyCompanyDBContext = toyCompanyDBContext;
        }
        public IEnumerable<Toy> GetAllToys()
        {
            var data = toyCompanyDBContext.Toys;
            return data;
        }

        public Toy GetToyById(int id)
        {
            var data = toyCompanyDBContext.Toys.SingleOrDefault(b => b.ToyId == id);
            return data;
        }
    }
}
