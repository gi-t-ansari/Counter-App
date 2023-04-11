const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener('click', () => {
    counterElement.textContent = parseInt(counterElement.textContent) + 1;
})

decrementButton.addEventListener('click', () => {
    counterElement.textContent = parseInt(counterElement.textContent) - 1;
})

resetButton.addEventListener('click', () => {
    counterElement.textContent = 0;
})