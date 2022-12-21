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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// create a new section 
function addNewsection() {
    let sections = document.querySelectorAll("section");
    let addSection = document.createElement("section");
    let addDiv = document.createElement("div");
    let addH2 = document.createElement("h2");
    let addPara1 = document.createElement("p");
    let addPara2 = document.createElement("p");
    let mainSections = document.querySelector("main");
    addSection.id = `section${sections.length + 1}`;
    addSection.setAttribute("data-nav", `Section ${sections.length + 1}`);
    addDiv.className = "landing__container";
    addH2.textContent = `Section ${sections.length + 1}`;
    addPara1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    addPara2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    addSection.appendChild(addDiv);
    addDiv.appendChild(addH2);
    addDiv.appendChild(addPara1);
    addDiv.appendChild(addPara2);
    mainSections.appendChild(addSection);
}
addNewsection();

/**
 * Define Global Variables
 * 
*/
let navBar = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
sections[0].classList.remove("your-active-class"); //Removing the exist class from the first section


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    for (i = 1; i <= sections.length; i++) {
        let navbarSection = document.createElement("li");
        let textNode = document.createTextNode("section " + i);  // Creating the name of section with index
        navBar.appendChild(navbarSection);
        navbarSection.appendChild(textNode);
        navbarSection.style.setProperty("display", "inline-block", "important"); //To avoide overriding this property
        navbarSection.className = "menu__link"; //To set the properties of navegation bar to the list
    }
}


// Add class 'active' to section when near top of viewport
function activeSection() {
    window.addEventListener("scroll", function () {
        for (let section of sections) {
            if (section.getBoundingClientRect().bottom >= 200 && section.getBoundingClientRect().top <= 200) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        }
    }
    );
}



// Scroll to anchor ID using scrollTO event
function scroll() {
    let navbarSections = document.querySelectorAll("li");
    for (let i = 0; i < navbarSections.length; i++) {
        navbarSections[i].addEventListener("click", function () {
            sections[i].scrollIntoView({ behavior: "smooth" });
        });
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
buildNavbar();
// Scroll to section on link click
scroll();
// Set sections as active
activeSection();