using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    public class ToyOrderContext : DbContext
    {
        public ToyOrderContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=LAPTOP-F6N6S5HR\SQLEXPRESS01;Database=ToyCompanyDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        
        }
        //entities
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Orders> Orders { get; set; }

        public DbSet<ToyCompanyPlant> ToyCompanyPlants { get; set; }
        public DbSet<Toy> Toys  { get; set; }
    }
}
