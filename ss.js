let p = document.querySelector("#para");
let start = 1;
let level = 0;
let btns = ["purple", "yellow", "red", "grey"]

let gamesq = [];
let sq = [];
let h1 = document.querySelector("#head");

document.addEventListener("keypress", function () {
    p.innerHTML = `<b>Started</b>`;
    start = 1;
    levelup()
});

function flash(btn) {
    // console.log(`.${btn}`)
    let randbtn = document.querySelector(`.${btn}`)
    randbtn.classList.add("flash")
    setTimeout(function () {
        randbtn.classList.remove("flash");
    }, 250);
};


let levelup = function () {
    sq = [];
    p.innerHTML = `<b> level ${++level}</b>`
    let idx = Math.floor(Math.random() * 4)
    let btn = btns[idx];
    gamesq.push(btn)
    // console.log(gamesq)

    flash(btn)
};

let checkbtn = function (idx) {
    let l = idx;
    if (gamesq[l] === sq[l]) {
        if (sq.length == gamesq.length) {
            setTimeout(levelup, 800)
        }
    }
    else {
        p.innerHTML = `game over<b>your level is ${level} `
        reset()
    }
};

let btt
for (btt of btns) {
    let bttt = document.querySelector(`.${btt}`)
    let at = bttt.getAttribute("id")//purple
    bttt.addEventListener("click", function (ev) {
        // console.log(at)
        if (start) {
            bttt.classList.add("flash")
            setTimeout(function () {
                bttt.classList.remove("flash")
            }, 250)

            sq.push(at)
            checkbtn(sq.length - 1)
        }
    })
};

let reset = () => {
    level = 0;
    gamesq = []
    sq = []
    start = 1;
};