using System;

namespace Assignment
{
    class Assignment
    {
        static void Main(string[] args)
        {
            //Compute area of rectangle using func delegate
            Console.WriteLine("Enter the length of Rectangle:");
            double length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter the breadth of Rectangle:");
            double breadth = Convert.ToDouble(Console.ReadLine());
            Func<double, double, double> area = (length, breadth) => length * breadth;
            double Area = area(length, breadth);
            Console.WriteLine($"Area of Rectangle : {Area}");


            //Compute add of two number using lambda expression
            Console.WriteLine("Enter number 1:");
            double no1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter number 2:");
            double no2 = Convert.ToDouble(Console.ReadLine());
            Func<double, double, double> sum = (no1, no2) => no1 + no2;
            double result = sum(no1,no2);
            Console.WriteLine($"Sum of two numbers using lambda : {result}");
        }
    }
}
