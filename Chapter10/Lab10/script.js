"use strict";
/*  JavaScript 7th Edition
    Chapter 10
   

    Driving Directions
    Author: Fareeda Anderson
    Date:   02/04/2023

   
*/


function showMap() {

    // Page objects
    let driveMap = document.getElementById("driveMap");
    let driveDirections = document.getElementById("driveDirections");
    let startingCity = document.getElementById("startingPoint");
    let endingCity = document.getElementById("endingPoint");

    // Use the new google.maps.DirectionsService() object constructor to create a DirectionsService object named driveFind
    let driveFind = new google.maps.DirectionsService();

    //Use the new google.maps.DirectionsRenderer() object constructor to create a DirectionsRenderer object named driveDraw
    let driveDraw = new google.maps.DirectionsRenderer();

    // Create a LatLng object named city storing within it a latitude of 34.084050 and a longitude of -84.669886.
    let city = new google.maps.LatLng(34.084050, -84.669886);

    // Use the new google.maps.Map() object constructor to instantiate a new Google map named myMap . Set the zoom level to 12 and center the map on city

    let myMap = new google.maps.Map(driveMap, {
        zoom: 12,
        center: city
    });

    // Create event listeners for the startingPoint and endingPoint selection lists, running the drawRoute() function in response to the change event.
    startingCity.addEventListener("change", drawRoute);

    function drawRoute() {
        // Insert an if statement that tests whether the selected index for the startingPoint and endingPoint selection lists are both not equal to 0.
        if (startingCity.selectedIndex !== 0 && endingCity.selectedIndex !== 0) {
            // Define a route object named driveRoute with an origin at startingPoint.value and a destination at endingPoint.value. Set the travelMode option to DRIVING
            let driveRoute = {
                origin: startingCity.value,
                destination: endingCity.value,
                travelMode: 'DRIVING'
            };

            // Apply the route() method to the driveFind object generating directions between the starting and ending points. 
            driveFind.route(driveRoute, function (result, status) {
                // If the status is OK, call the setDirections() method on the driveDraw object, passing it the result object.
                if (status === 'OK') {
                    driveDraw.setDirections(result);
                    driveDraw.setMap(myMap);
                    driveDraw.setPanel(driveDirections);
                } else {
                    driveDirections.textContent = "Directions unavailable " + status;
                }
            }
            );
        }
    }
}




