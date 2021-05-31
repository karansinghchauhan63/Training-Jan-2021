using Assignment.Models.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class Patients : IPatient
    {
        private readonly HospitalContext hospitalContext;
        public Patients(HospitalContext hospitalContext)
        {
            this.hospitalContext = hospitalContext;
        }
        public IEnumerable<Models.Patient> GetReport(string name)
        {
            var data = hospitalContext.Patients.Where(b => b.PatientName == name);
            return data;
        }

        public IQueryable<Models.Patient> GetSummaryReport(string name)
        {
            var data = hospitalContext.Patients.Include(a => a.Doctor).Where(b => b.Doctor.DoctorName == name);
            return data;
        }
    }
}
