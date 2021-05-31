using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            ToyOrderContext toyOrderContext = new ToyOrderContext();
            List<Customer> customerList = new List<Customer>();
            List<Orders> ordersList = new List<Orders>();

            char ch = 'y';
            while(ch == 'y')
            {
                Console.WriteLine("Enter your choice: ");
                Console.WriteLine("1) Insert Customer");
                Console.WriteLine("2) Update Customer");
                Console.WriteLine("3) Delete Customer");
                Console.WriteLine("4) View all products");
                Console.WriteLine("5) Search the record");
                Console.WriteLine("6) Place an order");
                int choice = Convert.ToInt32(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        Console.WriteLine("Enter the Customer Id : ");
                        int cid = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter the Customer Name: ");
                        string name = Console.ReadLine();
                        Console.WriteLine("Enter the Contact Number: ");
                        string cno = Console.ReadLine();
                        Console.WriteLine("Enter the Address: ");
                        string address = Console.ReadLine();
                        var addData = new List<Customer> { new Customer() { Name = name, ContactNo = cno, Address = address } };
                        foreach (var item in addData)
                        {
                            toyOrderContext.Customers.Add(item);
                        }
                        toyOrderContext.SaveChanges();
                        Console.WriteLine("Data inserted successfully!");
                        break;

                    case 2:
                        Console.WriteLine("Enter the Customer Id whose record is to be updated: ");
                        cid = Convert.ToInt32(Console.ReadLine());
                        var q1 = toyOrderContext.Customers.SingleOrDefault(a => a.CustomerId == cid);

                        Console.WriteLine("Enter the new Customer Name: ");
                        q1.Name= Console.ReadLine();
                        Console.WriteLine("Enter the new Contact Number: ");
                        q1.ContactNo = Console.ReadLine();
                        Console.WriteLine("Enter the new Address: ");
                        q1.Address = Console.ReadLine();
                        toyOrderContext.SaveChanges();
                        Console.WriteLine("Data updated successfully!");
                        break;

                    case 3:
                        Console.WriteLine("Enter the Customer Id whose record is to be deleted: ");
                        cid = Convert.ToInt32(Console.ReadLine());
                        var q2 = toyOrderContext.Customers.SingleOrDefault(a => a.CustomerId == cid);
                        toyOrderContext.Customers.Remove(q2);
                        toyOrderContext.SaveChanges();
                        Console.WriteLine("Deleted Successfully!");
                        break;

                    case 4:
                        Console.WriteLine("----------------TOYS----------------");
                        var q3 = toyOrderContext.Toys;
                        foreach (var item in q3)
                        {
                            Console.WriteLine($"Toy Id: {item.ToyId}\t\t\tToy Name: {item.ToyName}\t\t\t Price: {item.Amount} \t\t\t Category: {item.Category}");
                        }
                        break;

                    case 5:
                        Console.WriteLine("Enter the order Id: ");
                        int orderid = Convert.ToInt32(Console.ReadLine());

                        var q5 = toyOrderContext.Orders.Where(a => a.OrderId == orderid);
                        foreach (var item in q5)
                        {
                            Console.WriteLine($"Toy Id: {item.ToyId}\t\t\tCustomer Id: {item.CustomerId}\t\t\tQuantity: {item.Quantity} \t\t\tPurchase Date: {item.PurchaseTime}");
                        }
                        toyOrderContext.SaveChanges();
                        break;

                    case 6:
                        Console.WriteLine("Enter the Customer Id: ");
                        cid = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter the Toy Id: ");
                        int toyid = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter the Quantity: ");
                        int qty = Convert.ToInt32(Console.ReadLine());
                        var currentTime = DateTime.Now;

                        var orders = new List<Orders> { new Orders { PurchaseTime = currentTime, CustomerId = cid, ToyId = toyid, Quantity = qty } };
                        foreach (var item in orders)
                        {
                            toyOrderContext.Orders.Add(item);
                        }
                        toyOrderContext.SaveChanges();
                        Console.WriteLine("Order Placed Successfully!");
                        break;

                    default:
                        Console.WriteLine("Invalid choice!");
                        break;

                }
                Console.WriteLine("Do you want to continue? y/n");
                ch = Convert.ToChar(Console.ReadLine());
            }
        }
    }
}
