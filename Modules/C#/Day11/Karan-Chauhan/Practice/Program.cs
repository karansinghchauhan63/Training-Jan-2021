using Microsoft.EntityFrameworkCore;
using Practice.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            StudentPracticedbContext student = new StudentPracticedbContext();
            
            List<Student> studentlist = new List<Student>() { new Student() { StudentId = 1, StudentName = "Kartik", Standard = "Tenth", Address = "Naroda", ContactNo = "9999999999" } };

           foreach (var item in studentlist)
               {
                   student.Students.Add(item);
                   student.SaveChanges();
               }
               Console.WriteLine("Data inserted successfully!");


               Console.WriteLine("Enter the course name whose record is to be deleted: ");
               string cname = Console.ReadLine();

               var data = student.Courses.SingleOrDefault(s => s.CourseName == cname);
               if( data == null)
               {
                   Console.WriteLine("Data is invalid!");
               }
               else
               {
                   student.Courses.Remove(data);
                   student.SaveChanges();
                   Console.WriteLine("Deleted Successfully!");
               }
               

            Console.WriteLine("Enter the name whose record is to be updated: ");
            var name = Console.ReadLine();

            var query = student.Students.SingleOrDefault(s => s.StudentName == name);

            if(query != null)
            {
                Console.WriteLine("Enter the new address of user: ");
                query.Address = Console.ReadLine();
                Console.WriteLine("Enter the new contact no of user: ");
                query.ContactNo = Console.ReadLine();
                student.SaveChanges();
                Console.WriteLine("Data updated successfully!");
            }
            else
            {
                Console.WriteLine("Enter valid data!");
            }

            

            Console.WriteLine("Enter the name of student whose course is to be displayed: ");
            var n = Console.ReadLine();

            //var qw = student.Students.SingleOrDefault(s => s.StudentName == n);
            var q = student.Courses.Include(a => a.Student).Where(b => b.Student.StudentName == n);

            foreach (var item in q)
            {
                Console.WriteLine("Course Name: "+item.CourseName + "   Student Name:  "+item.Student.StudentName);
            }
            
            Console.ReadKey();
        }

    }
}
