using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace Assignment.Models
{
    public class EmployeeAssignmentContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Assignments> Assignments { get; set; }

        public EmployeeAssignmentContext(DbContextOptions<EmployeeAssignmentContext> options) : base(options)
        {



        }
      


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=LAPTOP-F6N6S5HR\SQLEXPRESS01;Database=PersonDb;Trusted_Connection=True;");
        }



       
    }
}