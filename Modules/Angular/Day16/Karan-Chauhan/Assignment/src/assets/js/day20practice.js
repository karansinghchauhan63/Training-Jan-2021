function storeData(){
    getText("myfile.json");        
    async function getText(file) {
      let myObject = await fetch(file);
      let myText = await myObject.text();
      localStorage.setItem('prod', JSON.stringify(myText));
     alert('Data successfully added in local storage!');
    }
}

    function readData(){
        alert(localStorage.getItem('prod'));
    }

    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        alert("Latitude: " + position.coords.latitude + 
        " Longitude: " + position.coords.longitude);
    }