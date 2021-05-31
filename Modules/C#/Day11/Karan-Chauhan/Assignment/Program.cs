using Assignment.Models;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            HospitalContext hospital = new HospitalContext();
            char ch = 'y';

            while(ch == 'y')
            {
                Console.WriteLine("Enter your choice:");
                Console.WriteLine("1 - Insert a Doctor");
                Console.WriteLine("2 - Update a Doctor");
                Console.WriteLine("3 - Delete a Doctor");
                Console.WriteLine("4 - Find a report of patient assigned to a particular doctor");
                Console.WriteLine("5 - Find a report of medicine list for a particular patient");
                Console.WriteLine("6 - Display summary report of Doctor and patient");
                int choice = Convert.ToInt32(Console.ReadLine());
                List<Doctor> doctor = new List<Doctor>();

                switch (choice)
                {
                    case 1:
                        Console.WriteLine("Enter the doctor Id: ");
                        int drid = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine("Enter the doctor name: ");
                        string drname = Console.ReadLine();
                        Console.WriteLine("Enter the departments: ");
                        string dept = Console.ReadLine();
                        var data = new List<Doctor>() { new Doctor() { DoctorId = drid, DoctorName = drname, Departments = dept } };


                        foreach (var item in data)
                        {
                            hospital.Doctors.Add(item);
                            hospital.SaveChanges();
                        }
                        Console.WriteLine("Data inserted successfully!");

                        break;

                    case 2:
                        Console.WriteLine("Enter the doctor name whose record is to be updated: ");
                        var name = Console.ReadLine();

                        var q1 = hospital.Doctors.SingleOrDefault(s => s.DoctorName == name);

                        if (q1 != null)
                        {
                            Console.WriteLine("Enter the new department: ");
                            q1.Departments = Console.ReadLine();
                            Console.WriteLine("Enter the new doctor name: ");
                            q1.DoctorName = Console.ReadLine();
                            hospital.SaveChanges();
                            Console.WriteLine("Data updated successfully!");
                        }
                        else
                        {
                            Console.WriteLine("Enter valid data!");
                        }
                        break;

                    case 3:
                        Console.WriteLine("Enter the doctor name whose record is to be deleted: ");
                        string dname = Console.ReadLine();

                        var q = hospital.Doctors.SingleOrDefault(s => s.DoctorName == dname);
                        if (q == null)
                        {
                            Console.WriteLine("Data is invalid!");
                        }
                        else
                        {
                            hospital.Doctors.Remove(q);
                            hospital.SaveChanges();
                            Console.WriteLine("Deleted Successfully!");
                        }
                        break;

                    case 4:
                        Console.WriteLine("Enter the name of patient whose report is to be displayed: ");
                        var n = Console.ReadLine();

                        var q4 = hospital.Patients.Where(b => b.PatientName == n);
                        foreach (var item in q4)
                        {
                            Console.WriteLine("Patient Name: " + item.PatientName + "\t\t Health Issue:  " + item.HealthIssue + "\t\t Treatment:  " + item.Treatment + "\t Doctor Id: " + item.DoctorId);
                        }
                        
                        
                        break;

                    case 5:
                        Console.WriteLine("Enter the Patient Id to get the medicine list");
                        int pid = Convert.ToInt32(Console.ReadLine());
                        var q5 = hospital.Drugs.Where(a => a.PatientId == pid);
                        foreach (var item in q5)
                        {
                            Console.WriteLine("Drug Name: " + item.DrugName + "\t\t\tAmount: " + item.Amount);
                        }
                           
                        
                        break;

                    case 6:
                        Console.WriteLine("Enter the doctor name to get summary of doctor and patient");
                        string d2 = Console.ReadLine();
                        var q6 = hospital.Patients.Include(a => a.Doctor).Where(b => b.Doctor.DoctorName == d2);

                        foreach (var item in q6)
                        {
                            Console.WriteLine("Patient Name: " + item.PatientName + "\t\t Health Issue:  " + item.HealthIssue + "\t\t Treatment:  " + item.Treatment + "\t Doctor Name: " + item.Doctor.DoctorName +"\t Department: "+item.Doctor.Departments);
                        }
                        break;

                    default:
                        Console.WriteLine("Please enter valid choice!");
                        break;
                }

                Console.WriteLine("Do you want to continue? y/n");
                ch = Convert.ToChar(Console.ReadLine());
                
            }

           
        }
    }
}
