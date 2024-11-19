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
// Change button text on hover
alertButton.addEventListener("mouseover", () => {
    alertButton.textContent = "Now Click";
});

// Restore button text on mouse out
alertButton.addEventListener("mouseout", () => {
    alertButton.textContent = "Click Me";
});
greetingDiv.textContent = greetingMessage;
greetingDiv.className = greetingClass;
// **Footer: Display Current Year**
const footer = document.getElementById("footer");
const year = new Date().getFullYear();
footer.innerHTML = `&copy; Aniesh Vohra, ${year}`;
// **Loop-Generated List**
const numberList = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    numberList.appendChild(listItem);
}
