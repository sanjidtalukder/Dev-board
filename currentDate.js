// Get the current date
const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric' ,
    month: 'long',
    year: 'numeric' 
       
});

document.getElementById("currentDate").textContent = formattedDate;
document.getElementById("Deadline-time").textContent = formattedDate;
document.getElementById("CloudSync-time").textContent =formattedDate;
document.getElementById("SwiftPayc-time").textContent = formattedDate;
document.getElementById("Meta-time").textContent = formattedDate;
document.getElementById("GoogleLLC-time").textContent =formattedDate;
document.getElementById("Glassdoar-time").textContent = formattedDate;
