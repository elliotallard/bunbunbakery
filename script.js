// window.addEventListener("scroll", function() {
//   	var elementTarget = document.getElementById("section2");
//   	if (window.scrollY > 800) {

//       	document.getElementById("navbarSupportedContent")
//      	const li = document.createElement('LI');
// 	    const txt = document.createTextNode("HOME");
//       	li.className = 'nav-item';
// 	    if (recoveredList[i].deleted) {
// 	      li.style.display = 'none';
// 	    }
// 	    li.appendChild(txt);
// 	    ul.appendChild(li);
//   }
// });


// taken from W3Schools, https://www.w3schools.com/howto/howto_js_active_element.asp

// Get the container element
let numberSection = document.getElementById("how-many");

// Get all buttons with class="btn" inside the container
let numBtns = numberSection.getElementsByClassName("flex-container");

//then do the same thing for frosting.
let frostingSection = document.getElementById('how-frosting');
let frostBtns = frostingSection.getElementsByClassName('myButton');



const markActive = (rowOfButtons, scope) => {
	for (var i = 0; i < rowOfButtons.length; i++) {
  rowOfButtons[i].addEventListener("click", function() {
    var current = scope.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";

    
  });
}
}

//This function changes the price when a number of buns is selected.
// const changePrice = (scope) => {
// 	let bunPrice = 3;
// 	var current = scope.getElementsByClassName("active");
// 	console.log(current[0].className);
// 	if (current.length > 0) {
// 		console.log(current[0].className);
// 		if (current.className.includes("one")) {
// 			document.getElementById("dollars").innerHTML = "$1.00";
// 		}
// 	}
// };


markActive(numBtns, numberSection);
markActive(frostBtns, frostingSection);
















