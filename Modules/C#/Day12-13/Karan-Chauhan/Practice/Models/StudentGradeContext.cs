using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirstPractice.Models
{
    public class StudentGradeContext : DbContext
    {
        public StudentGradeContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=LAPTOP-F6N6S5HR\SQLEXPRESS01;Database=NewSchoolDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //FLUENT API one to many Example
            modelBuilder.Entity<Student>()
           .HasOne<Grade>(s => s.Grade)
           .WithMany(g => g.Students)
           .HasForeignKey(s => s.GradeId);


            //FLUENT API one to one Example
            modelBuilder.Entity<School>()
            .HasOne<StudentAddress>(s => s.Address)
            .WithOne(ad => ad.School)
            .HasForeignKey<StudentAddress>(ad => ad.StudentAddressId);

            //FLUENT API many to many Example
            modelBuilder.Entity<StudentAddress>().HasKey(sc => new { sc.StudentAddressId, sc.SchoolId });




        }
        //entities
        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }

        public DbSet<School> Schools { get; set; }
        public DbSet<StudentAddress> StudentAddresses { get; set; }
    }
}
