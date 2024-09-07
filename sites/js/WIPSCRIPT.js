/* ?Dates*/
var CreationDate = "17th of July 2024";
document.getElementById("CreationDate").innerHTML = CreationDate;


function countUpTime(){
    const currentDate = new Date();
    const targetDate = new Date("2024-8-17");
    // Internal logic
    const milisec = currentDate - targetDate;
    const days = Math.floor(milisec / (1000*60*60*24));
    // Html Element Logic
    const UpTimeCounter = document.getElementById("UpTime");
    UpTimeCounter.textContent = `in other words, its been up for: ${days} Days!`;
}
countUpTime();
setTimeout(countUpTime, 0);




var Redirect = document.getElementById("Redirect");
Redirect.onclick = function redirect(){
    window.location.href = "/sites/css/main.html"
};
