using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Assignment.Models
{
    public partial class ToyCompanyDBContext : DbContext
    {
        public ToyCompanyDBContext()
        {
        }

        public ToyCompanyDBContext(DbContextOptions<ToyCompanyDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<ToyCompanyPlant> ToyCompanyPlants { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-F6N6S5HR\\SQLEXPRESS01;Database=ToyCompanyDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasIndex(e => e.CustomerId, "IX_Orders_CustomerId");

                entity.HasIndex(e => e.ToyId, "IX_Orders_ToyId");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId);

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ToyId);
            });

            modelBuilder.Entity<ToyCompanyPlant>(entity =>
            {
                entity.HasKey(e => e.ToyPlantId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
