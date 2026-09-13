const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");
const eventSelect = document.getElementById("event");

if (eventName === "technical") {
    eventSelect.value = "technical";
}
else if (eventName === "sports") {
    eventSelect.value = "sports";
}
else if (eventName === "cultural") {
    eventSelect.value = "cultural";
}
