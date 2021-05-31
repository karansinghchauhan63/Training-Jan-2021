function checkDate() {
    var d = document.getElementById('date').value;
    var myArray = d.split("-");
    
    for(i = 0; i < myArray.length; i++ ){
        n = isNaN(myArray[i]);
        if(n == true){
            alert('Date Is Invalid - Please enter Integer Value');
        }
    }

    if (myArray[0] >= 1 != myArray[0] <= 12){
        alert('Entered Month Is Invalid!');
    }
    
    if (myArray[1] >= 1 != myArray[1] <= 31){
        alert('Entered Date Is Invalid!');
    }

    if (myArray[0] ==2 && myArray[1] > 29){
        alert('Entered Date Is Invalid!');
    }

    if (myArray[0] %2 == 0){
        
        if (myArray[1] == 31){
        alert('Entered Date Is Invalid!');
        }
        else{
            alert('Entered Date Is Valid!')
        }
    }

    else{
        alert('Entered Date Is Valid!');
    }            
    return false;
   
}