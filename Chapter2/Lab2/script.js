/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Fareeda Anderson
      Date:   Tue, 24th Jan 2023

      Filename: project02-04.js
 */


// All Constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const TAX_RATE = 0.07;

// calcTotal function
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   if (buyChicken === true) {
      cost += CHICKEN_PRICE;
   }
   if (buyHalibut === true) {
      cost += HALIBUT_PRICE;
   }
   if (buyBurger === true) {
      cost += BURGER_PRICE;
   }
   if (buySalmon === true) {
      cost += SALMON_PRICE;
   }
   if (buySalad === true) {
      cost += SALAD_PRICE;
   }

   let tax = cost * TAX_RATE;
   let foodTax = document.getElementById("foodTax");
   foodTax.innerHTML = formatCurrency(tax);

   let foodTotal = document.getElementById("foodTotal");
   foodTotal.innerHTML = formatCurrency(cost);

   let totalBill = document.getElementById("totalBill");
   let totalCost = cost + tax;
   totalBill.innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
