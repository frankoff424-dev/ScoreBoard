let addHomeScore = document.getElementById("home")
let addAwayScore = document.getElementById("away")

let homeCount = 0
let awayCount = 0

function home1() {
    homeCount +=1
    addHomeScore.textContent = homeCount
}
function home2() {
    homeCount +=2
    addHomeScore.textContent = homeCount
}
function home3() {
    homeCount +=3
    addHomeScore.textContent = homeCount
}

function away1() {
    awayCount +=1
    addAwayScore.textContent = awayCount
}
function away2() {
    awayCount +=2
    addAwayScore.textContent = awayCount
}
function away3() {
    awayCount +=3
    addAwayScore.textContent = awayCount
}

