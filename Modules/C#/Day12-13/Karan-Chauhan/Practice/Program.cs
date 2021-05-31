using CodeFirstPractice.Models;
using System;
using System.Collections.Generic;

namespace CodeFirstPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            StudentGradeContext student = new StudentGradeContext();
            List<Student> studentList = new List<Student>();

            
            Console.WriteLine("----------------Code First Approach - One to Many Example----------------");
            Console.WriteLine("Enter the Student Name: ");
            string name = Console.ReadLine();
            Console.WriteLine("Enter the Grade Id: ");
            int gid = Convert.ToInt32(Console.ReadLine());

            var query = new List<Student>() { new Student() { Name = name, GradeId = gid } };


            foreach (var item in query)
            {
                student.Students.Add(item);                
            }
            student.SaveChanges();
            Console.WriteLine("Data inserted successfully!");

            

            Console.WriteLine("----------------Code First Approach - One to One Example----------------");
            Console.WriteLine("Enter the school Id: ");
            int schoolid = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter the address: ");
            string address = Console.ReadLine();
            Console.WriteLine("Enter the city: ");
            string city = Console.ReadLine();
            Console.WriteLine("Enter the state: ");
            string state = Console.ReadLine();
            Console.WriteLine("Enter the country: ");
            string country = Console.ReadLine();

            List<StudentAddress> stAddressList = new List<StudentAddress>();
            try
            {
                var data = new List<StudentAddress>() { new StudentAddress() { Address = address, City = city, State = state, Country = country, SchoolId = schoolid } };
                foreach (var item in data)
                {
                    student.StudentAddresses.Add(item);

                }
                student.SaveChanges();
                Console.WriteLine("Data inserted successfully!");
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            

            Console.ReadKey();

        }
    }
}
