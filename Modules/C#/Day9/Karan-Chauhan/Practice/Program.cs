using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace Practice
{
    
    class Program
    {
        private static string Name = "Default name";
        static async Task Main(string[] args)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            Console.WriteLine("Start Time: " +DateTime.Now);
            List<Task<string>> tasks = new List<Task<string>>();

            tasks.Add(item:Task.Run(function:() => function1()));
            tasks.Add(item:Task.Run(function:() => function2()));
            tasks.Add(item:Task.Run(function:() => function3()));

            await Task.WhenAll(tasks);

            function4(Name);
            stopwatch.Stop();
            Console.WriteLine("Total Execution Time - "+stopwatch.Elapsed.Seconds);
            Console.ReadKey();

        }

        private static string function1()
        {
            Thread.Sleep(millisecondsTimeout: 3000);
            Console.WriteLine("Function 1 executed: " + DateTime.Now);
            return "Function1";
        }

        private static string function2()
        {
            Thread.Sleep(millisecondsTimeout: 5000);
            Console.WriteLine("Function 2 executed: " + DateTime.Now);
            return "Function2";
        }

        private static string function3()
        {
            Thread.Sleep(millisecondsTimeout: 10000);
            Console.WriteLine("Function 3 executed: " + DateTime.Now);
            Name = "karan";
            return Name;
        }

        private static void function4(string value)
        {
            Console.WriteLine("Function 4 executed:  + Print Value: - "+ value + " | " + DateTime.Now);
        }
    }
}
