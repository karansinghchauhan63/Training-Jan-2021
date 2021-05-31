document.getElementById('demo').style.display='none';
          function  display(value) {
            document.getElementById('demo').style.display='block';
            document.getElementById('msg').style.display='none';
              document.getElementById('demo').innerHTML=value;
          }
          function play() {
            document.getElementById('msg').innerHTML="Exam already started and will end after 3 hours! Good luck!";   
            promise();
          }
          function promise() {
              let mypromise = new Promise(function(resolve,reject) {
                  var time=3*1000*60*60;             
                  setTimeout(function() {resolve("Exam over! Time up!");},time);
              });
        
            mypromise.then(function(value) {
                  display(value);
            },
            function(error) {
                display(error);
            }
            );
        } 