"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Lab 6

      Project to validate a form used for setting up a new account
      Author: Fareeda Anderson
      Date: 25th Feb 2023
*/

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", () => {
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      } else if (pwd.value !== pwd2.value) {
            pwd.setCustomValidity("Your passwords do not match");
      } else {
            pwd.setCustomValidity("");
      }
})

