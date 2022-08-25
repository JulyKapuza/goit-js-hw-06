const rangeNumber = document.querySelector("#font-size-control")
const changeText = document.querySelector("#text")

const changeTextSize = (event) => {
    let changeRange = event.currentTarget.value;
    changeText.style.fontSize = `${changeRange}px`;
}

rangeNumber.addEventListener("input", changeTextSize)
