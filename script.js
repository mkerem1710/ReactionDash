const box = document.getElementById("box");
const result = document.getElementById("result");

let startTime;
let timeout;

function start() {
    result.textContent = "";
    box.textContent = "Wait for green...";
    box.style.background = "red";

    const delay = Math.random() * 2000 + 1000;

    timeout = setTimeout(() => {
        box.style.background = "green";
        box.textContent = "CLICK!";
        startTime = Date.now();
    }, delay);
}

box.addEventListener("click", () => {
    if (box.style.background === "red") {
        clearTimeout(timeout);
        result.textContent = "Too early!";
        start();
    } else {
        const reaction = Date.now() - startTime;
        result.textContent = `Your reaction time: ${reaction} ms`;
        start();
    }
});

start();
