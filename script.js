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


// // taken from W3Schools, https://www.w3schools.com/howto/howto_js_active_element.asp

// // Get the container element
// var btns = document.getElementsByClassName("flex-container");

// // Get all buttons with class="btn" inside the container
// // var btns = document.getElementById("how-many").getElementsByClassName("flex-container");

// // Loop through the buttons and add the active class to the current/clicked button


// const list = document.getElementById('how-many');

// document.getElementsByClassName('flex-container').addEventListener(
//   'click',
//   ev => {

//   	console.log(0);
//     for (var i = 0; i < btns.length; i++) {
// 		console.log(0);
// 	    var current = document.getElementsByClassName("active");
// 	    current[0].className = current[0].className.replace(" active", "");
// 	    this.className += " active";
//   };
// });




// Get the container element
// const btns = document.getElementsByClassName("flex-container");




// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < 4; i++) {
	var btns = document.getElementsByClassName("flex-container");
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


