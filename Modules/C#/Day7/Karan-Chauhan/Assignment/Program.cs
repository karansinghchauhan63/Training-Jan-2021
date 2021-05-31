using System;
using System.Collections.Generic;
using System.Linq;
namespace Assignment
{
    public class Employee
    {

        public int ID { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public double Salary { get; set; }

        public DateTime JoiningDate { get; set; }

        public string Deparment { get; set; }

    }

    public class Incentive
    {

        public int ID { get; set; }

        public double IncentiveAmount { get; set; }

        public DateTime IncentiveDate { get; set; }

    }

    public class Program

    {

        public static void Main(string[] args)
        {

            List<Employee> employees = new List<Employee>()

            {

                new Employee(){ ID=1,FirstName="John",LastName="Abraham",Salary=1000000,JoiningDate=new DateTime(2013,1,1),Deparment="Banking"},

                new Employee(){ID=2,FirstName="Michael",LastName="Clarke",Salary=800000,JoiningDate=new DateTime(),Deparment="Insurance" },

                new Employee(){ID=3,FirstName="oy",LastName="Thomas",Salary=700000,JoiningDate=new DateTime() ,Deparment="Insurance"},

                new Employee(){ID=4,FirstName="Tom",LastName="Jose",Salary=600000,JoiningDate=new DateTime() ,Deparment="Banking"},

                      new Employee(){ID=4,FirstName="TestName2",LastName="Lname%",Salary=600000,JoiningDate=new DateTime(2013,1,1) ,Deparment="Services"}

            };

            List<Incentive> incentives = new List<Incentive>()

            {

                new Incentive(){ ID=1,IncentiveAmount=5000,IncentiveDate=new DateTime(2013,02,02)},

                new Incentive(){ID=2,IncentiveAmount=10000,IncentiveDate=new DateTime(2013,02,4)},

                new Incentive(){ID=1,IncentiveAmount=6000,IncentiveDate=new DateTime(2012,01,5)},

                new Incentive(){ID=2,IncentiveAmount=3000,IncentiveDate=new DateTime(2012,01,5)}

            };


            // Get employee details from employees object whose employee name is “John” (note restrict operator)
            var query1 = from a in employees where a.FirstName == "John" select a;
            foreach(var item in query1)
            {
                Console.WriteLine($"FirstName: {item.FirstName}  LastName: {item.LastName} Salary: {item.Salary} Date Of Joining: {item.JoiningDate} Department: {item.Deparment}");
            }

            //Get FIRSTNAME,LASTNAMe from employees object(note project operator)
            var query2 = from a in employees
                         select new
                         {
                             fullname = a.FirstName + " " + a.LastName
                         };
            foreach (var item in query2)
            {
                Console.WriteLine("Fullname "+item.fullname);
            }

            //Select FirstName, IncentiveAmount from employees and incentives object for those employees who have incentives.(join operator)
            var query3 = from emp in employees
                         join inc in incentives on emp.ID equals inc.ID
                         select new
                         {
                             firstname = emp.FirstName,
                             amount = inc.IncentiveAmount
                         };
            foreach (var item in query3)
            {
                Console.WriteLine($"Firstname: {item.firstname}  IncentiveAmount: {item.amount}" );
            }

            //Get department wise maximum salary from employee table order by salary ascending (note group by)

            var query4 = from d in employees group d by d.Deparment into a let x = a.Max(x=>x.Salary) orderby x ascending select new
            {
                a.Key, 
                maxsalary = x
            };
            foreach (var item in query4)
            {
                Console.WriteLine($"Department = {item.Key}  Salary: {item.maxsalary}");
            }

            //Select department, total salary with respect to a department from employees object where total salary
            //greater than 800000 order by TotalSalary descending(group by having)
            var query5 = from d in employees
                         group d by d.Deparment into a
                         let x = a.Sum(t => t.Salary)
                         orderby x descending
                         select new
                         {
                             a.Key,
                             sal = x
                         };
            foreach (var item in query5)
            {
                if (item.sal > 800000)
                {
                    Console.WriteLine($"Department: {item.Key}  " +
                    $"Salary: {item.sal}");
                }
                
            }
            
        }

    }
}
