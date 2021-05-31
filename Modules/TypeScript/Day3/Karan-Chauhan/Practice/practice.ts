//Generic Function
function display<T>(arg:T): T{
    return arg;
}
let output1 = display<string>("Welcome");
let output2 = display<number>(100);
console.log(output1);
console.log(output2);

//Generic Class
class StudentInfo<T,U>
{
    private Id: T;
    private Name: U;
    setValue(id: T, name: U):void{
        this.Id = id;
        this.Name = name;
    }
    
    display():void{
        console.log(`Id = ${this.Id}  Name = ${this.Name}`);
    }
}
let st = new StudentInfo<number, string>();
st.setValue(101,"Karan");
st.display();
let std = new StudentInfo<string, string>();
std.setValue("201","Karan Singh Chauhan");
std.display();

//Generic Interface as Function Type
interface StudentInfo<T,U>
{
    (id: T, value:U): void;
};

function studentData(id: number, value: string): void{
    console.log(`Id = ${id} \nName = ${value}`);
}

let stdy: StudentInfo<number,string> = new studentData(11, "James");
stdy(11, "James ");
