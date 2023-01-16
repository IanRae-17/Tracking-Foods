let foods = []

fetch("./foods.json")
  .then((response) => response.json())
  .then((json) => {foods = json});



const form = document.getElementById("min-max");

const showValue = document.getElementById("showValue");

const table = document.getElementById("myTable");

const loadFood = document.getElementById("load");

loadFood.addEventListener("click", function () {
  displayFood(foods);
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevents form from autosubmitting

  var minProt = document.getElementById("min-prot").value;
  console.log(minProt);

  var maxProt = document.getElementById("max-prot").value;
  console.log(maxProt);

  var minCarbs = document.getElementById("min-carbs").value;
  console.log(minCarbs);
  var maxCarbs = document.getElementById("max-carbs").value;
  console.log(maxCarbs);
  var minFat = document.getElementById("min-fat").value;
  console.log(minFat);
  var maxFat = document.getElementById("max-fat").value;
  console.log(maxFat);
  var minCal = document.getElementById("min-cal").value;
  console.log(minCal);
  var maxCal = document.getElementById("max-cal").value;
  console.log(maxCal);
  let tempFoodArray = [];

  console.log(minCal < foods[0].cals < maxCal);

  foods.forEach((food) => {
    if (
      minCal < food.cals &&
      food.cals < maxCal &&
      minProt < food.prot &&
      food.prot < maxProt &&
      minCarbs < food.carbs &&
      food.carbs < maxCarbs &&
      minFat < food.fat &&
      food.fat < maxFat
    ) {
      tempFoodArray.push(food);
    }
  });

  console.log(tempFoodArray);

  displayFood(tempFoodArray);
});

function displayFood(foodArray) {
  for (var i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }

  foodArray.forEach((food) => {
    let row = table.insertRow(1);

    let name = row.insertCell(0);
    let cals = row.insertCell(1);
    let prot = row.insertCell(2);
    let carbs = row.insertCell(3);
    let fat = row.insertCell(4);

    name.innerHTML = food.name;
    cals.innerHTML = food.cals;
    prot.innerHTML = food.prot;
    carbs.innerHTML = food.carbs;
    fat.innerHTML = food.fat;
  });
}
