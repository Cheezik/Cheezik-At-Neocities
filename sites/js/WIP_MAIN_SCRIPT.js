/* ?Dates*/
var CreationDate = "Creation date: 17th of July 2024";
document.getElementById("CreationDate").innerHTML = CreationDate;


function countUpTime(){
    const currentDate = new Date();
    const targetDate = new Date("2024-8-17");
    // Internal logic
    const milisec = currentDate - targetDate;
    const days = Math.floor(milisec / (1000*60*60*24));
    // Html Element Logic
    const UpTimeCounter = document.getElementById("UpTime");
    UpTimeCounter.textContent = `Uptime: ${days} Days!`;
}
countUpTime();
setTimeout(countUpTime, 0);




var Redirect = document.getElementById("Redirect");
function pageAlert(){
    alert("This site isn't really ready to be showcased, And its in early stage, Dismiss this popup to be redirected.");
    
    //redirect after alert dismissed
    windows.location.href = "https://cheezik-at.neocities.org/html/main"
}
Redirect.onclick = pageAlert
//Redirect.onclick = alert("This site isn't really ready to be showcased, once its ready i will update this button to redirect to the site! thanks for understanding!");

//Redirect.onclick = function redirect(){
//    window.location.href = "/sites/css/main.html"

