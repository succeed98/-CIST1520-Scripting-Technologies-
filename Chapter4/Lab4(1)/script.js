/*    JavaScript 7th Edition
      Chapter 4
      Lab 4

      Application to calculate total moving cost
      Author: Fareeda Anderson
      Date:   07 Feb 2022

*/

// Global Constants
const COST_PER_LB = 0.50;
const COST_PER_MILE = 0.75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box

   try {
      if (!(wgtBox.value > 0)) {
         throw "!! Enter a positive weight";
      }

      totalCost += wgtBox.value * COST_PER_LB;

   } catch (err) {
      msgBox.innerHTML = "!! Enter a positive weight";
   }

   try {
      if (!(distBox.value > 0)) {
         throw "!! Enter a positive mileage";
      }

      totalCost += distBox.value * COST_PER_MILE;

   } catch (err) {
      msgBox.innerHTML = "!! Enter a positive mileage";
   }

   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }

   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}