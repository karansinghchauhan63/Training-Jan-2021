function empDetail() {
            
            
    if(document.getElementById("empID").value == ""){
        document.getElementById("p1").innerHTML = "<p>*Please enter valid Employee Id</p>";           
    }

    if(document.getElementById("empName").value == ""){
        document.getElementById("p2").innerHTML = "<p>*Please enter valid Employee Name</p>";           
    }

    if(document.getElementById("age").value == ""){
        document.getElementById("p3").innerHTML = "<p>*Please enter valid Employee Age</p>";           
    }

    if(document.getElementById("designation").value == ""){
        document.getElementById("p4").innerHTML = "<p>*Please enter valid Designation</p>";           
    }

    if(document.getElementById("salary").value == ""){
        document.getElementById("p5").innerHTML = "<p>*Please enter valid Salary</p>";           
    }

    if(document.getElementById("emailID").value == ""){
        document.getElementById("p6").innerHTML = "<p>*Please enter valid Email Id</p>";           
    }

    if(document.getElementById("dateJoin").value == ""){
        document.getElementById("p7").innerHTML = "<p>*Please enter valid Joining Date</p>";           
    }

    if(document.getElementById("contactNo").value == ""){
        document.getElementById("p8").innerHTML = "<p>*Please enter valid Contact Number</p>";           
    }

    var em = document.getElementById("empID").value;
    var regex = /^[a-zA-Z0-9]{5,}$/;
    var idcheck = em.match(regex);
    if(idcheck == null){
        alert("Enter Valid Employee ID!");
    }

    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail = document.getElementById("emailID").value;
    var result = mail.match(mailformat);
    if(result == null){
        alert("Enter Valid Email!");
    }

    var age = document.getElementById("age").value;
    var agepattern = /^[0-9]{2}$/;
    var agecheck = age.match(agepattern);

    if(agecheck == null){
        alert("Enter Valid Age!");
    }
    else{
        alert('Successfully Submitted');
    }
    
    

   
   return false;
} 