using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Practice
{
    class Practice
    {
        static void Main(string[] args)
        {
            //Query Syntax
            List<string> mylist = new List<string>() { "dog", "cat", "cow", "wolf", "lion" };
            var query = from a in mylist where a.StartsWith('c') select a;
            foreach (var item in query)
            {
                Console.WriteLine(item);
            }


            //Method Syntax
            var result = mylist.Where(a => a.StartsWith('w'));
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }


            //TypeOf
            ArrayList list = new ArrayList();
            list.Add("temp");
            list.Add("hello");
            list.Add(0);
            list.Add(10.23);
            list.Add('C');
            var query2 = from a in list.OfType<int>() select a;
            foreach (var item in query2)
            {
                Console.WriteLine(item);
            }

            //OrderBy
            IList<Student> studentList = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            };

            var orderByResult = from s in studentList orderby s.StudentName select new {s.StudentName};
            foreach (var item in orderByResult)
            {
                Console.WriteLine(item.StudentName);
            }

            //ThenBy
            var thenByResult = studentList.OrderBy(s => s.StudentName).ThenBy(s => s.Age);
            foreach (var item in thenByResult)
            {
                Console.WriteLine(item.StudentName+" "+item.Age);
            }


            //GroupBy
            var result2 = from s in studentList group s by s.Age;

            //iterate each group        
            foreach (var item in result2)
            {
                Console.WriteLine("Age Group: {0}", item.Key); //Each group has a key 

                foreach (Student s in item) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }

            //Join
            List<string> str1 = new List<string>() {"One", "Two", "Three", "Four"};
            List<string> str2 = new List<string>() { "Ten", "Two", "Six", "Four" };



            var innerJoin = str1.Join(str2,
                                  str1 => str1,
                                  str2 => str2,
                                  (str1, str2) => str1);
            Console.WriteLine("Join Example");
            foreach (var item in innerJoin)
            {
                Console.WriteLine(item);
            }

            //GroupJoin

            IList<Student> student = new List<Student>() {
    new Student() { StudentID = 1, StudentName = "John", StandardID =1 },
    new Student() { StudentID = 2, StudentName = "Moin", StandardID =1 },
    new Student() { StudentID = 3, StudentName = "Bill", StandardID =2 },
    new Student() { StudentID = 4, StudentName = "Ram",  StandardID =2 },
    new Student() { StudentID = 5, StudentName = "Ron" }
        };

            IList<Standard> standardList = new List<Standard>() {
    new Standard(){ StandardID = 1, StandardName="Standard 1"},
    new Standard(){ StandardID = 2, StandardName="Standard 2"},
    new Standard(){ StandardID = 3, StandardName="Standard 3"}
        };

        var groupJoin = standardList.GroupJoin(studentList,  //inner sequence
                                            std => std.StandardID, //outerKeySelector 
                                            s => s.StandardID,     //innerKeySelector
                                            (std, studentsGroup) => new // resultSelector 
        {
           Students = studentsGroup,
           StandarFulldName = std.StandardName
        });

        foreach (var item in groupJoin)
        {
           Console.WriteLine(item.StandarFulldName);

                foreach (var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
        }


        //All/Any
        bool check = studentList.All(s => s.Age > 12 && s.Age < 20);
        Console.WriteLine(check);

        //Contains
        List<int> listtemp = new List<int>() { 1, 2, 3, 4, 5 };
        bool ch = listtemp.Contains(10);

        Console.WriteLine("Contains Example: "+ch);


        //Aggregate
        List<String> strList = new List<String>() { "One", "Two", "Three", "Four", "Five"};

        var aggexample = strList.Aggregate((s1, s2) => s1 + ", " + s2);

        Console.WriteLine(aggexample);

        //Average
        List<int> intList = new List<int>() { 10, 20, 30, 40, 50 };

        var avg = intList.Average();

        Console.WriteLine("Average: {0}", avg);

        //Count

        var count = intList.Count();
        Console.WriteLine("Count: " + count);

        //DefaultIfEmpty
        List<string> emptyList = new List<string>();

        var ab = emptyList.DefaultIfEmpty();
        Console.WriteLine("Count: {0}" , ab.Count());
        Console.WriteLine("Value: {0}" , ab.ElementAt(0));

        //Intersect
        IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
        IList<string> strList2 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight"};

        var r = strList1.Intersect(strList2);

        foreach(string str in r)
        Console.WriteLine(str);

        //let keyword
        var let_example = from s in studentList
                            let lowercaseStudentName = s.StudentName.ToLower()
                                where lowercaseStudentName.StartsWith("r")
                                select lowercaseStudentName;
            foreach (var item in let_example)
            {
                Console.WriteLine(let_example);
            }
        }


    }
}
