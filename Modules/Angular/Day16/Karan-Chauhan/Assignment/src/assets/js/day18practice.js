function answer(){
    function display(data)
    {
        alert("Square is "+ data);
    }

    function square(no,callback)
    {
        let ans=no*no;
        callback(ans);
    }
    var no= parseInt(document.getElementById('number').value);
    square(no,display)
    return false;
    }

    //REVERSE STRING PROMISE EXAMPLE

    function mydisplay(some)
      {
         alert(some);
      }
       function fnPromise(){ 
            var str = document.getElementById('reversedata').value;
            docheck(str);
       }
      function docheck(data)
      {
          let newpromise = new Promise(function(resolve,reject){
              
        
              if(isNaN(data))
              {
                var arr = [];
                var len=data.length-1;
                for(let i=len;i>=0;i--)
                {
                    arr.push(data[i]);
                }
               setTimeout(function(){ resolve(arr);},5000);
              
                 }
              else{
                  setTimeout(function(){ reject("Invalid Input!");},5000);
              }
          });
      
      newpromise.then(
             function(value) {mydisplay(value);},       
             function(error) {mydisplay(error);}       

      );
}

var n1=10;
var n2=15;
function fnDiff()
{
    n1=20;
    let n2=30;
    document.getElementById('d').innerHTML="in function change value of no1 var value is ->>" + n1;
    document.getElementById('d4').innerHTML="in function change value of no2 var value is ->>" + n2;
}
document.getElementById('d1').innerHTML="before calling fuction  no1 var value is  ->>" + n1;
document.getElementById('d3').innerHTML="before calling fuction  no2 var value is  ->>" + n2;
fnDiff();
document.getElementById('d2').innerHTML="after calling fuction overwrite no1 var value is  ->>" + n1;
document.getElementById('d5').innerHTML="after calling fuction overwrite no2 var value is  ->>" + n2;
