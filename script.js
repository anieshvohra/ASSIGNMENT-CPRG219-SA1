// **Greeting Based on Time of Day**
const greetingDiv = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingMessage = "";
let greetingClass = "";

if (hour < 12) {
    greetingMessage = "Good morning!";
    greetingClass = "morning";
} else if (hour < 17) {
    greetingMessage = "Good afternoon!";
    greetingClass = "afternoon";
} else {
    greetingMessage = "Good evening!";
    greetingClass = "evening";
}

greetingDiv.textContent = greetingMessage;
greetingDiv.className = greetingClass;
