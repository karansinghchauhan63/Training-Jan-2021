using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.IRepository
{
    public interface IPatient
    {
        public IEnumerable<Patient> GetReport(string name);

        public IQueryable<Patient> GetSummaryReport(string name); 
    }
}
