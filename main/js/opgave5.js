let cars;

function resetCarArray() {
    cars = [{id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000}, {
        id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900
    }, {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000}, {
        id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799
    }, {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}];
}

resetCarArray();

function loadCars() {
    document.getElementById("tbody").innerHTML = cars.map(car => (`
        <tr>
        <td>${car.id}</td>
        <td>${car.year}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.price}</td>
        </tr>
        `)).join("\n")
}

let lastYearSort = "desc";
let lastIdSort = "desc";
let lastPriceSort = "desc";
let lastModelSort = "desc";
let lastMakeSort = "desc";

///////
function loadCarsSortByYear() {
    if (lastYearSort === "desc") loadCarsSortByYearAsc(); else loadCarsSortByYearDesc();
    loadCars();
}

function loadCarsSortByYearAsc() {
    cars.sort((a, b) => a.year - b.year)
    lastYearSort = "asc";
}

function loadCarsSortByYearDesc() {
    cars.sort((a, b) => b.year - a.year)
    lastYearSort = "desc";
    loadCars();
}

///////

function loadCarsSortById() {
    if (lastIdSort === "desc") loadCarsSortByIdAsc(); else loadCarsSortByIdDesc();
    loadCars();
}

function loadCarsSortByIdAsc() {
    cars.sort((a, b) => a.id - b.id)
    lastIdSort = "asc";
}

function loadCarsSortByIdDesc() {
    cars.sort((a, b) => b.id - a.id)
    lastIdSort = "desc";
    loadCars();
}


///////
function loadCarsSortByPrice() {
    if (lastPriceSort === "desc") loadCarsSortByPriceAsc(); else loadCarsSortByPriceDesc();
    loadCars();
}

function loadCarsSortByPriceAsc() {
    cars.sort((a, b) => a.price - b.price)
    lastPriceSort = "asc";
}

function loadCarsSortByPriceDesc() {
    cars.sort((a, b) => b.price - a.price)
    lastPriceSort = "desc";
    loadCars();
}

///////
function loadCarsSortByMake() {
    if (lastMakeSort === "desc") loadCarsSortByMakeAsc(); else loadCarsSortByMakeDesc();
    loadCars();
}

function loadCarsSortByMakeAsc() {
    cars.sort((a, b) => a.make.localeCompare(b.make))
    lastMakeSort = "asc";
}

function loadCarsSortByMakeDesc() {
    cars.sort((a, b) => b.make.localeCompare(a.make))
    lastMakeSort = "desc";
    loadCars();
}

///////

function loadCarsSortByModel() {
    if (lastModelSort === "desc") loadCarsSortByModelAsc(); else loadCarsSortByModelDesc();
    loadCars();
}

function loadCarsSortByModelAsc() {
    cars.sort((a, b) => a.model.localeCompare(b.model))
    lastModelSort = "asc";
}

function loadCarsSortByModelDesc() {
    cars.sort((a, b) => b.model.localeCompare(a.model))
    lastModelSort = "desc";
    loadCars();
}

///////

function filterCarsByLowestPrice() {
    cars = cars.filter(car => {
        return car.price >= document.getElementById("LowestPriceInput").value;
    })
    loadCars();
}

function filterCarsByHighestPrice() {
    cars = cars.filter(car => {
        return car.price <= document.getElementById("HighestPriceInput").value;
    })
    loadCars();
}

function resetAndLoadArray(){
  resetCarArray();
  loadCars();
}

loadCars();