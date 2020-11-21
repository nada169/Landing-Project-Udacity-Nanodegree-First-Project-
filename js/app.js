/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var nav = document.querySelectorAll('section');

var myul = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function Getactivelink(section) {

  //extract data nav of viewport section
  var datatext = section.getAttribute('data-nav');
  //query to get all links
  var a = document.querySelectorAll('a');

  a.forEach((link) => {

    if (link.textContent == datatext) {

      a.forEach((link) => {
        link.classList.remove('active');

      })

      link.classList.add('active');
    }
  });

}

// build the nav
// array.foreach(function)
const fragment = document.createDocumentFragment();//instead of div
nav.forEach((section) => {

// Build menu 

  let text = section.getAttribute('data-nav');
  let li = document.createElement('li');
  let a = document.createElement('a');
  let textnode = document.createTextNode(text);
  a.appendChild(textnode);
  li.appendChild(a);

  a.addEventListener('click', function respondToTheClick() {
    //console.log(textnode);


    // Scroll to anchor ID using scrollTO event
    // Scroll to section on link click
    section.scrollIntoView({ behavior: "smooth" });


  });


  fragment.appendChild(li);

});

//nav contain all sections
myul.appendChild(fragment);

//console.log(myul);



/**
 * End Main Functions
 * Begin Events
 *
*/

window.addEventListener('scroll', function Sectionscroll() {


  var sec = document.querySelectorAll('section');

  // console.log(window.innerHeight);

  sec.forEach((section) => {

    let rect = section.getBoundingClientRect();
    // console.log(section.offsetTop);

    // Add class 'active' to section when near top of viewport

    if (rect.top >= 0 && rect.bottom < window.innerHeight  && innerWidth > 768 ) {
      //if  bottom 600 and elelement become 590 therefore the element is inside  view port
      let sec = document.querySelectorAll('section');
      sec.forEach((section) => {
        section.classList.remove('your-active-class'); 
      })
      // Set sections as active
      section.classList.add("your-active-class");
      Getactivelink(section);
    } else if (window.scrollY > section.offsetTop-50 && innerWidth<=768 ) {
      let sec = document.querySelectorAll('section');
      sec.forEach((section) => {
        section.classList.remove('your-active-class'); 
      })
      // Set sections as active
      section.classList.add("your-active-class");
      Getactivelink(section);
    } else {
      
      section.classList.remove('your-active-class');

    }
  });

});



const button = document.querySelector(".navbar__menu button");

button.addEventListener("click", () => {
  myul.style.display = myul.style.display === "none" ? "flex" : "none";
});


window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		myul.style.display = "block";
	} else {
		myul.style.display = "none";
	}
});

