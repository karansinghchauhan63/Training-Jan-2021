using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Shopclues_WEB_API.Models
{
    public partial class SHOPCLUESContext : DbContext
    {
        public SHOPCLUESContext()
        {
        }

        public SHOPCLUESContext(DbContextOptions<SHOPCLUESContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BlockedUser> BlockedUsers { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<SoldProduct> SoldProducts { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<ViewBlockedUser> ViewBlockedUsers { get; set; }
        public virtual DbSet<ViewProduct> ViewProducts { get; set; }
        public virtual DbSet<ViewSoldProduct> ViewSoldProducts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=LAPTOP-F6N6S5HR\\SQLEXPRESS01;Database=SHOPCLUES;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<BlockedUser>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.EmailId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Email)
                    .WithMany()
                    .HasForeignKey(d => d.EmailId)
                    .HasConstraintName("FK__BlockedUs__Email__37A5467C");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId)
                    .ValueGeneratedNever()
                    .HasColumnName("ProductID");

                entity.Property(e => e.Category)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SoldProduct>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.DeliveryAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Geolocation)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.SoldDate).HasColumnType("date");

                entity.Property(e => e.UserId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("UserID");

                entity.HasOne(d => d.Product)
                    .WithMany()
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__SoldProdu__Produ__3C69FB99");

                entity.HasOne(d => d.User)
                    .WithMany()
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__SoldProdu__UserI__3B75D760");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.EmailId)
                    .HasName("PK__Users__7ED91AEF3CC18082");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ViewBlockedUser>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("view_blockedUsers");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("EmailID");

                entity.Property(e => e.Username)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ViewProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("view_Products");

                entity.Property(e => e.Category)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ViewSoldProduct>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("view_SoldProducts");

                entity.Property(e => e.DeliveryAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnType("money");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.UserId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("UserID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
