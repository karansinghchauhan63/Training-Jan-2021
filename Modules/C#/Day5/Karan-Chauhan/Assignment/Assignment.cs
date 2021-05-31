using System;
using System.Collections;
using System.Collections.Generic;

namespace Assignment
{
    class Mobike
    {
        string BikeNumber { get; set; }
        string Name { get; set; }
        double ContactNumber { get; set; }
        int Days { get; set; }
        int Rent { get; set; }
        List<Mobike> mobike = new List<Mobike>();
        public void Input()
        {
            Console.WriteLine("Enter the Name: ");
            string name = Console.ReadLine();
            Console.WriteLine("Enter the Contact Number: ");
            double cno = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter the Bike Number: ");
            string bikeno = Console.ReadLine();
            Console.WriteLine("Enter the number of days to rent the bike: ");
            int days = Convert.ToInt32(Console.ReadLine());
            mobike.Add(new Mobike() {BikeNumber = bikeno, ContactNumber = cno, Name = name, Days = days });
        }

        public void Compute(int Days)
        {
            int i=1;
            int rent=0;
            while(Days>0)
            {
                if(i < 6)
                {
                    rent += 500;                    
                }
                else if(i>5 && i<11)
                {
                    rent += 400;
                }
                else
                {
                    rent += 200;
                }
                i++;
                Days -= 1;
            }
            Rent = rent;
         
           
        }


        public void Display(){

            if (mobike.Count == 0)
            {
                Console.WriteLine("No records found!");
            }
            else
            {
                Console.WriteLine("Bike No.    PhoneNumber    No. Of Days    Charge");
                foreach (Mobike item in mobike)
                {
                    Compute(item.Days);
                    Console.WriteLine(item.Name + "    " + item.ContactNumber + "    " + item.Days + "    " + Rent);
                }
            }
                      

        }

        public void Delete()
        {
            if (mobike.Count == 0)
            {
                Console.WriteLine("No records found!");
            }
            else
            {
                Console.WriteLine("Enter the Name of Customer:");
                string name = Console.ReadLine();
                var temp = mobike.Find(Mobike => Mobike.Name == name);
                mobike.Remove(temp);
                Console.WriteLine("Customer Details Removed!");
            }
            
        }

        public void Search()
        {
            Console.WriteLine("Enter the Name of Customer");
            string name = Console.ReadLine();
            if(mobike.Exists(Mobike => Mobike.Name == name))
            {
                Console.WriteLine("Bike No.    PhoneNumber    No. Of Days    Charge");
                foreach (Mobike  item in mobike)
                {
                    if(item.Name == name)
                    {
                        Compute(item.Days);
                        Console.WriteLine(item.BikeNumber + "    " + item.ContactNumber + "    " + item.Days + "    " + Rent);
                    }
                }
            }
            else
            {
                Console.WriteLine("Customer does not exist!");
            }
        }

        public void Edit()
        {
            Console.WriteLine("Enter the Name of Customer");
            string name = Console.ReadLine();
            if (mobike.Exists(Mobike => Mobike.Name == name))
            {
                var temp = mobike.Find(Mobike => Mobike.Name == name);
                mobike.Remove(temp);
                Console.WriteLine("Enter the new Name of Customer");
                string newname = Console.ReadLine();
                Console.WriteLine("Enter the new Contact Number: ");
                double cno = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Enter the new Bike Number: ");
                string bikeno = Console.ReadLine();
                Console.WriteLine("Enter the new number of days to rent the bike: ");
                int days = Convert.ToInt32(Console.ReadLine());
                mobike.Add(new Mobike() { BikeNumber = bikeno, ContactNumber = cno, Name = newname, Days = days });
            }
            else
            {
                Console.WriteLine("Customer does not exist!");
            }
        }
    }
    class Assignment
    {
        static void Main(string[] args)
        {

            
            Mobike mb = new Mobike();
            char choice = 'y';
            while (choice == 'y')
            {
                Console.WriteLine("Enter your choice :");
                Console.WriteLine("Press 1)Add 2)Remove 3)Edit 4)Search 5)Display");
                int ch = Convert.ToInt32(Console.ReadLine());
                switch(ch)
                {
                    case 1:
                        mb.Input();
                        mb.Display();
                        break;
                    case 2:
                        mb.Delete();
                        break;
                    case 3:
                        mb.Edit();
                        mb.Display();
                        break;
                    case 4:
                        mb.Search();
                        break;
                    case 5:
                        mb.Display();
                        break;
                    default:
                        Console.WriteLine("Invalid choice!");
                        break;
                }
                Console.WriteLine("If you want to continue? (y/n)");
                choice = Convert.ToChar(Console.ReadLine());
            }
           
            Console.ReadKey();
        }
    }
}
