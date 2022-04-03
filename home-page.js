console.log(document);

const bulletButton = document.getElementById("CircleButton");
const bulletButton1 = document.getElementById("CicleButton2");

console.log(bulletButton);

const dailyInserted = document.getElementById("DailyInput");
const WeeklyInserted = document.getElementById("WeeklyInput");
//const MonthlyInserted = document.getElementById("MonthlyInput");
//const YearlyInserted = document.getElementById("YearlyInput");

function addText() {
  var bullet = document.createElement("ul");
  var textBox = document.createElement("input");
  textBox.type = "text";
  console.log(textBox);

  dailyInserted.appendChild(bullet);
  dailyInserted.appendChild(textBox);
}

function addCircleW(){
  var bullet = document.createElement("ul");
  var textBox = document.createElement("input");
  textBox.type = "text";
  console.log(textBox);

  WeeklyInserted.appendChild(bullet);
  WeeklyInserted.appendChild(textBox);
}

bulletButton.addEventListener("click", addText);
bulletButton1.addEventListener("click", addCircleW);
console.log(bulletButton);



const toDoButton = document.getElementById("PencilButton");
bulletButton.addEventListener("click", addText);

const dateInserted = document.getElementById("CurrDateInput");
function currentDate() {
  const d = new Date();
  var fullDate = d.getMonth() + " " + d.getDate() + " " + d.getFullYear();
  console.log(fullDate);
  dateInserted.appendChild(fullDate);
}
