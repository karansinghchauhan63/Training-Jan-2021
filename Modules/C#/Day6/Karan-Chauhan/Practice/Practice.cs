using System;

namespace Practice
{
    class Practice
    {
        static void Main(string[] args)
        {
            //event example
            var theClock = new Clock();
            var visibleClock = new VisibleClock();
            visibleClock.Subscribe(theClock);
            theClock.RunClock();
            var logger = new Logger();
            logger.Subscribe(theClock);
            theClock.RunClock();
            //delegate example
            Document doc = new Document();
            doc.Text = "Document text goes here";

            var blogPoster = new BlogPoster();
            var blogDelegate = new Document.SendDoc(blogPoster.PosttoBlog);
            doc.ReportSendingResult(blogDelegate);

            var emailSender = new EmailSender();
            var emailDelegate = new Document.SendDoc(emailSender.SendEmail);
            doc.ReportSendingResult(emailDelegate);



            //Compute area of circle using func delegate
            Console.WriteLine("Enter the radius of Rectangle:");
            double radius = Convert.ToDouble(Console.ReadLine());
            Func<double, double> area = (radius) => 3.14 * radius * radius;
            double Area = area(radius);
            Console.WriteLine($"Area of Circle : {Area}");


            //Compute subtraction of two number using lambda expression
            Console.WriteLine("Enter number 1:");
            double no1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter number 2:");
            double no2 = Convert.ToDouble(Console.ReadLine());
            Func<double, double, double> sub = (no1, no2) => no1 - no2;
            double result = sub(no1, no2);
            Console.WriteLine($"Subtraction of two numbers using lambda : {result}");
        }
    }
}
