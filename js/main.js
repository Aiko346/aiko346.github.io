let width = window.innerWidth;
let smallerThan950 = false;
const removed = new Set();

if (width <= 950) {
    console.log(width);
    smallerThan950 = true;
    let toBeRemoved = document.querySelectorAll(".vanish");
    console.log(toBeRemoved);
    toBeRemoved.forEach((elem) => {
        elem.style.display = "none";
        removed.add(elem);
        console.log(elem);
});
}

window.addEventListener('resize', updateSize);

function updateSize() {
    let width = window.innerWidth;
    console.log(width);
    if (width <= 950 & !smallerThan950) {
        let toBeRemoved = document.querySelectorAll(".vanish");
        console.log(toBeRemoved);
        smallerThan950 = true;
        toBeRemoved.forEach((elem) => {
        elem.style.display = "none";
        removed.add(elem);
        console.log(elem);
    });
    } else if (width > 950) {
        smallerThan950 = false;
        removed.forEach((elem) => {
            elem.style.display = "initial";
            removed.delete(elem);
            console.log(elem);
        });
    }
}