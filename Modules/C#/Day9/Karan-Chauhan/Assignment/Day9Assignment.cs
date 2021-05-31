using System;
using System.IO;
using System.Threading.Tasks;

namespace Assignment
{
    class Day9Assignment
    {
        static readonly string rootFolder = @"D:\Radixweb\Training-Jan-2021\Modules\C#\Day9\Karan-Chauhan\Assignment";
        static async Task Main(string[] args)
        {
            Day9Assignment assignment = new Day9Assignment();
            await assignment.FileOperations();
        }

        public async Task FileOperations()
        {
            try
            {
                string file1 = "MyFile.txt";
                string data = "Hello, how are you?";
                await File.WriteAllTextAsync(Path.Combine(rootFolder, file1), data);

                if(File.Exists(Path.Combine(rootFolder, file1)) != false)
                {
                    string txt = await ReadFile(file1);

                    Console.WriteLine("Updated content from File1:");
                    Console.WriteLine(txt);

                    await WriteFile(txt);
                    Console.WriteLine("Copied content to File2 successfully!");

                    Console.WriteLine();

                    await DeleteFile(file1);
                    Console.WriteLine("File deleted successfully!");

                    Console.WriteLine();
                    if(File.Exists(Path.Combine(rootFolder, file1)) == false)
                    {
                        Console.WriteLine("File is not present");
                    }
                }
                else
                {
                    Console.WriteLine($"File not found: {Path.Combine(rootFolder, file1)}");
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task<string> ReadFile(string file1)
        {
            try
            {
                string txt1 = await File.ReadAllTextAsync(Path.Combine(rootFolder, file1));
                string[] txt2 = txt1.Split(',', StringSplitOptions.RemoveEmptyEntries);
                string txt3 = "";

                foreach (var item in txt2)
                {
                    txt3 += item.Trim() + "\n";
                }
                return txt3;
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return "";
            }
        }

        public async Task WriteFile(string txt3)
        {
            try
            {
                string file2 = "MyFile.txt";
                await File.WriteAllTextAsync(Path.Combine(rootFolder, file2), txt3);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task DeleteFile(string file1)
        {
            try
            {
                File.Delete(Path.Combine(rootFolder, file1));
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
