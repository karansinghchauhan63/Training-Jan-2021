var1 = parseFloat(prompt('Enter first number'));
    var2 = parseFloat(prompt('Enter second number'));
    var3 = parseFloat(prompt('Enter third number'));
    sum=0;
    if(var1 >= var2 && var1 >= var3) {
        largest = var1;
    }
    else if (var2 >= var1 && var2 >= var3) {
        largest = var2;
    }
    else {
        largest = var3; 
    }

    if(var1>40) {
        sum+=var1;
    }
    if(var2>40) {
        sum+=var2;
    }
    if(var3>40) {
        sum+=var3;
    }
    
    alert("Largest Number is - " + largest +" Sum - "+sum );