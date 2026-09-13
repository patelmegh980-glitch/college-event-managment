document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const selectedEvent = document.getElementById("event").value;
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (department === "") {
        alert("Please enter your department.");
        return;
    }
    if (selectedEvent === "") {
        alert("Please select an event.");
        return;
    }

    alert("Registration submitted successfully!");
    document.getElementById("registrationForm").reset();
});
