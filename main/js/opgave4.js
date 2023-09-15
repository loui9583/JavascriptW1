const cars = ["Ford", "WW", "Toyota", "Volvo"];

const carSelector = document.getElementById("car-selector");

const carMake = document.getElementById("car-make");

cars.forEach((car) => {
    const option = document.createElement("option");
    option.innerText = car;
    option.value = car;
    carSelector.appendChild(option);
});

carSelector.addEventListener("change", () => {
    carMake.textContent = carSelector.value;
});
