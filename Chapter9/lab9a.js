"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Lab 9

      Project to read field values from web storage
      Author: Fareeda Anderson
      Date:   26th march 2023 

*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

/* Functions */
const showData = () => {
      // store the 7 objects in a sessionn storage object
      sessionStorage.setItem("riderName", riderName.value);
      sessionStorage.setItem("ageGroup", ageGroup.value);
      sessionStorage.setItem("bikeOption", bikeOption.value);
      sessionStorage.setItem("routeOption", routeOption.value);
      sessionStorage.setItem("accOption", accOption.value);
      sessionStorage.setItem("region", region.value);
      sessionStorage.setItem("miles", miles.value);
      sessionStorage.setItem("comments", comments.value);
      // redirect to the next page
      window.location.href = "lab9b.html";
}

const submit = document.getElementById("submitButton");
submit.addEventListener("click", showData);