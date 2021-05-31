function fnNavigate() {
    window.location.assign("https://www.w3schools.com");
}

function goBack() {
    window.history.back();
}
   
function createWin() {
    myWindow = window.open("", "", "width=100, height=100");
}

function reSize() {
    myWindow.resizeTo(250, 250);
    myWindow.focus();
}