const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");
const eventTitleElement = document.getElementById("eventTitle");
if (eventName === "technical") {
    eventTitleElement.textContent = "Technical Fest";
}
else if (eventName === "sports") {
    eventTitleElement.textContent = "Sports Day";
}
else {
    eventTitleElement.textContent = "Annual Cultural Fest";
}


const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const eventVenue = document.getElementById("eventVenue");
if (eventName === "technical") {
    eventDate.textContent = "20 September 2026";
    eventTime.textContent = "9:00 AM";
    eventVenue.textContent = "Computer Lab";
}
else if (eventName === "sports") {
    eventDate.textContent = "25 September 2026";
    eventTime.textContent = "11:00 AM";
    eventVenue.textContent = "College Ground";
}
else {
    eventDate.textContent = "15 September 2026";
    eventTime.textContent = "10:00 AM";
    eventVenue.textContent = "College Auditorium";
}

const eventDescription = document.getElementById("eventDescription");
if (eventName === "technical") {
    eventDescription.textContent = "The Technical Fest is an exciting event where students can participate in coding, quiz, project exhibition and other technical competitions.";
}
else if (eventName === "sports") {
    eventDescription.textContent = "Sports Day is a fun-filled event where students can participate in cricket, football, running and various other sports activities.";
}
else {
    eventDescription.textContent = "The Annual Cultural Fest is a college event where students can participate in music, dance, drama and other cultural activities.";

}

const eventActivities = document.getElementById("eventActivities");
if (eventName === "technical") {
    eventActivities.innerHTML = `
        <p>* Coding Competitions</p>
        <p>* Technical Quiz</p>
        <p>* Project Exhibition</p>
        <p>* Web Development </p>
    `;
}
else if (eventName === "sports") {
    eventActivities.innerHTML = `
        <p>* Cricket</p>
        <p>* Football</p>
        <p>* Running Race</p>
        <p>* Volleyball</p>
    `;
}
else {
    eventActivities.innerHTML = `
        <p>* Singing Competitions</p>
        <p>* Dance Competitions</p>
        <p>* Drama</p>
        <p>* Fashion Show</p>
        <p>* Cultural Performances</p>
    `;
}
