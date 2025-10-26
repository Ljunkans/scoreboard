let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeTotal = 0;
let guestTotal = 0;

homeScore.textContent = homeTotal;
guestScore.textContent = guestTotal;



function homePoints(amount) {
    homeTotal += amount;
    homeScore.textContent = homeTotal;
}



function guestPoints(amount) {
    guestTotal += amount;
    guestScore.textContent = guestTotal;
}
