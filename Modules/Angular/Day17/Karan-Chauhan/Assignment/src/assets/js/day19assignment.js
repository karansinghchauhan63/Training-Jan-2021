var x = function (r) {return 3.14 * r * r}; 
        function fnCircle(){
            rad = document.getElementById('radius').value;
            var ans = x (rad);
            alert("Area of Circle: "+ans);
        }
        
        var areaRectangle = new Function("l", "b", "return l * b");
        function fnRectangle(){
            len = document.getElementById('length').value;
            bre = document.getElementById('breadth').value;
            var x = areaRectangle(len, bre);
            alert("Area of Rectangle: "+x);
        }
       
        fnHoisting(5);
    
        function fnHoisting(y) {
            
            alert('Example of Function Hoisting - '+y);
        }
    
        //  Function call
    
        var employee = {
            empDetails: function() {
            return this.name+" "+ this.address + " " + this.designation;
            }
        }
        var employeeobj = {
            name:"Michael",
            address: "Ahmedabad",
            designation: "Manager"
        }
        
        function fnCall() {
            temp = employee.empDetails.call(employeeobj);  
        alert("Function Call Example : " +temp);
        }
       
        function fnApply() {
            temp = employee.empDetails.apply(employeeobj);  
        alert("Function Apply Example : " +temp);
        }
    
    
        var a = 4;
        function exClosure() {
            a*=a;
            alert("Closure Example: "+ a);
        }