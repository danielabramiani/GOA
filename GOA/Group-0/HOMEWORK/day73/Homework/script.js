const child = document.getElementById("child");
const container = document.getElementById("container");

let left = 0;
let topPosition = 0;

document.addEventListener("keydown", function(event) {
    const containerRect = container.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const childWidth = childRect.width;
    const childHeight = childRect.height;

    switch(event.key) {
        case "ArrowLeft":
            left = Math.max(left - 10, 0);
            break;
        case "ArrowRight":
            left = Math.min(left + 10, containerWidth - childWidth);
            break;
        case "ArrowUp":
            topPosition = Math.max(topPosition - 10, 0);
            break;
        case "ArrowDown":
            topPosition = Math.min(topPosition + 10, containerHeight - childHeight);
            break;
    }

    child.style.left = left + "px";
    child.style.top = topPosition + "px";
});