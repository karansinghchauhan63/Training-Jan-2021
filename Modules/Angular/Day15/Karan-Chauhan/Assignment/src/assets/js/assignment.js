export function assignment(){

    

}

export function myOperation() {
    var no1 = parseFloat(document.getElementById('no1').value);
    var no2 = parseFloat(document.getElementById('no2').value);

    

    for (var i = 0; i < document.getElementsByName('operation').length; i++)
    {
         if (document.getElementsByName('operation')[i].checked)
        {
             var op = document.getElementsByName('operation')[i].value;
        }
    }

    if(op == "addition"){
        ans = no1 + no2;
    }
    else if(op == "subtraction"){
        ans = no1 - no2;
    }
    else if(op == "multiplication"){
        ans = no1 * no2;
    }
    else{
        ans = no1 / no2;
    }

    if(isNaN(no1) || isNaN(no2)){
        alert('Invalid Input!');
    }
    else{
        res = "Result is :" + ans;
        document.getElementById('result').innerText = res; 
    }           
}