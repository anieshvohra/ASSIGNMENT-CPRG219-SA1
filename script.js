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
// **Alert Button: Functionality and Hover Effect**
const alertButton = document.getElementById("btn-alert");

// Add click event to display an alert
alertButton.addEventListener("click", () => {
    alert("Hello world! Welcome to my page. This webpage is all dedicated about me, know more about me by clicking on 'OK' and then 'BACKGROUND INFORMATION' above. ");
});
greetingDiv.textContent = greetingMessage;
greetingDiv.className = greetingClass;
// **Footer: Display Current Year**
const footer = document.getElementById("footer");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; Aniesh Vohra, ${year}`;