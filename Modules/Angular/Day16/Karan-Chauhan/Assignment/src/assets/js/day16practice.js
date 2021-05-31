function checkstr(){

    var checkstr = document.getElementById('strcheck').value;
    var l = checkstr.length;
    if(l == 0){
        alert('String is Empty!')
    }
    else{
        alert('String is not Empty!')
    }
    return false;
}


function strconv() {

    var str = document.getElementById('constr').value;
    var arr = str.split(" ");
    alert(arr);
    return false;
    
}

function extract() {
    var str = document.getElementById('exstr').value;
    var s = parseInt(document.getElementById('start').value);
    var n = parseInt(document.getElementById('num').value);

    result = str.substr(s,n);
    alert('Extracted String is:  '+result);
    return false;
}

function checkDate() {
    var d = new Date();
    alert(d);
    return false;
}

var myArray = ["Cat", "Dog", "Elephant", "Horse", "Rat", "Fish"];

function fnPush() {
    var item = document.getElementById('pushdata').value;
    myArray.push(item);
    alert(myArray);
    return false;
}

function fnPop(){
    var item = myArray.pop();
    alert(item);
    return false;
}

function fnShift(){
    var item = myArray.shift();
    alert(item);
    return false;
}

function fnDelete(){
    var index = document.getElementById('del').value;
    delete myArray[index];
    alert(myArray);
    return false;
}