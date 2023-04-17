"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      

      Project to convert between celsius and fahrenheit
      Author: Fareed Anderson
      Date:  16 April 2023

     
*/

// using jquery, Apply the change() method to the input#cValue element, responding to changes in the Celsius input box.
$("#cValue").change(function () {
      var celcius = $("#cValue").val();
      var fahrenheit = 1.8 * celcius + 32;
      $("#fValue").val(fahrenheit);
      $("#fValue").val(fahrenheit.toFixed(0));
});

$("#fValue").change(function () {
      var fahrenheit = $("#fValue").val();
      var celcius = (fahrenheit - 32) / 1.8;
      $("#cValue").val(celcius);
      $("#cValue").val(celcius.toFixed(0));
});


