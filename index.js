let homePoints = 0
let guestPoints = 0

function add1pthome() {
    homePoints += 1
    document.getElementById("score-home").textContent = homePoints
}

function add2ptshome() {
    homePoints += 2
    document.getElementById("score-home").textContent = homePoints
}

function add3ptshome() {
    homePoints += 3
    document.getElementById("score-home").textContent = homePoints
}

function add1ptguest() {
    guestPoints += 1
    document.getElementById("score-guest").textContent = guestPoints
}

function add2ptsguest() {
    guestPoints += 2
    document.getElementById("score-guest").textContent = guestPoints
}

function add3ptsguest() {
    guestPoints += 3
    document.getElementById("score-guest").textContent = guestPoints
}

function reset() {
    guestPoints = 0
    homePoints = 0
    document.getElementById("score-guest").textContent = guestPoints
    document.getElementById("score-home").textContent = homePoints
}


    