using Assignment.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.Repository
{
    public class DoctorRepo : IDoctor
    {
        private readonly HospitalContext hospitalContext;
        public DoctorRepo(HospitalContext hospitalContext)
        {
            this.hospitalContext = hospitalContext;
        }
        public void DeleteDoctor(int id)
        {
            var data = hospitalContext.Doctors.Single(z => z.DoctorId == id);
            hospitalContext.SaveChanges();
        }

        public void InsertDoctor(Models.Doctor doctor)
        {
            hospitalContext.Doctors.Add(doctor);
            hospitalContext.SaveChanges();
        }

        public void UpdateDoctor(Models.Doctor doctor, int id)
        {
            var data = hospitalContext.Doctors.Single(z => z.DoctorId == id);
            data.DoctorName = doctor.DoctorName;
            data.Departments = doctor.Departments;
            hospitalContext.SaveChanges();
        }
    }
}
