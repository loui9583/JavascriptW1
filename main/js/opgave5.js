let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function loadCars() {
    const table = document.getElementById("tbody");
    table.innerHTML = ""; // Clear the existing table contents.

    cars.forEach(car => {
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>" + car.id + "</td><td>" + car.year + "</td><td>" + car.make + "</td><td>" + car.model + "</td><td>" + car.price + "</td>";
        table.appendChild(tr);
    });
}

function loadCarsSortById() {
    cars.sort((a, b) => a.id - b.id);
    loadCars();
}

function loadCarsSortByYear() {
    cars.sort((a, b) => a.year - b.year);
    loadCars();
}

function loadCarsSortByPrice() {
    cars.sort((a, b) => a.price - b.price);
    loadCars();
}

// localeCompare is used to sort strings
function loadCarsSortByMake() {
    cars.sort((a, b) => a.make.localeCompare(b.make));
    loadCars();
}

function loadCarsSortByModel() {
    cars.sort((a, b) => a.model.localeCompare(b.model));
    loadCars();
}

function filterCarsByMaxPrice() {
    removeFilter();
    const maxPrice = parseFloat(document.getElementById("maxPriceInput").value);
    const filteredCars = cars.filter(car => car.price <= maxPrice);
    cars = filteredCars; // Update the 'cars' array with the filtered cars.
    loadCars();
}
function removeFilter (){
    cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];
    loadCars();
}

loadCars();