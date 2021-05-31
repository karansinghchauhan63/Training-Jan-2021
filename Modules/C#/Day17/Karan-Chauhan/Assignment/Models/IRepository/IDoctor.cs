using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models.IRepository
{
    public interface IDoctor
    {
        public void InsertDoctor(Doctor doctor);

        public void UpdateDoctor(Doctor doctor, int id);

        public void DeleteDoctor(int id);


    }
}
