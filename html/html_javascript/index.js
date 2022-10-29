var textEl = document.getElementById("text");

function showDateAndTime() {
    var timeNow = Date();
    textEl.innerText = timeNow;
    textEl.style.display = "block";
}

function hideDateAndTime() {
    textEl.style.display = "none";
}