using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.IRepository
{
    public interface IDrugs
    {
        public IEnumerable<Drug> GetMedicineList(int patientId);
    }
}
