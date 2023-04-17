"use strict";
/*    JavaScript Final Exam
		Proejct 1
      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Fareeda Anderson
      Date:   17th April 2023

*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function () {
      console.log(dateBox.value)
      const dateStr = dateBox.value;
      const apiKey = "WuNsz8rYMIanyQv74KBR1upA4kkeO0eKIM1FcteB";
      const url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + dateStr;

      fetch(url).then((response) => {
            return response.json();
      }).then((json) => {
            console.log(json);
            showPicture(json);
      }).catch((err) => {
            console.log(err);
      });
}

function showPicture(json) {
      if (json.media_type === "video") {
            imageBox.innerHTML = "<iframe src='" + json.url + "'></iframe><h1>" + json.title + "</h1><p>" + json.explanation + "</p>";
      } else if (json.media_type === "image") {
            imageBox.innerHTML = "<img src='" + json.url + "' alt='" + json.title + "'><h1>" + json.title + "</h1><p>" + json.explanation + "</p>";
      } else {
            imageBox.innerHTML = "<h1> Image not Available</h1>";
      }
}




