using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class Drugs : IDrugs
    {
        private readonly HospitalContext hospitalContext;
        public Drugs(HospitalContext hospitalContext)
        {
            this.hospitalContext = hospitalContext;
        }
        public IEnumerable<Drug> GetMedicineList(int patientId)
        {
            var data = hospitalContext.Drugs.Where(a => a.PatientId == patientId);
            return data;
        }
    }
}
