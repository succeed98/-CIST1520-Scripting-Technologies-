"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      

      Project to city and state information from a provided postal code
      Author: Fareeda Anderson
      Date:   16th April 2023

      
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
      const countryValue = country.value;
      const codeValue = postalCode.value;

      region.value = "";
      place.value = "";
      console.log(countryValue, ' ', codeValue);
      const api = "http://api.zippopotam.us/" + countryValue + "/" + codeValue;

      fetch(api).then((response) => {
            return response.json();
      }).then((json) => {
            place.value = json.places[0]["place name"];
            region.value = json.places[0]["state abbreviation"];
      }).catch((error) => {
            console.log("Error: " + error);
      });



}



