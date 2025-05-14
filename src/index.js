import { pageDefaults } from "./pageDefaults.js";
import { header } from "./header.js";
// import { home } from "./home.js";
// import { menu } from "./menu.js";
// import { about } from "./about.js";

pageDefaults();
header();

const tabClickHandler = (e) => {
    
    console.log(e.target);
    console.log(e.target.textContent);
    
    if (e.target.textContent === "Home") {
        console.log("Home tab clicked");
        home();
    } else if (e.target.textContent === "Menu") {
        console.log("Menu tab clicked");
        menu();
    } else if (e.target.textContent === "About") {
        console.log("About tab clicked");
        about();
    }
};

// getNavs.navBtns === { [navBtn1, navBtn2, navBtn3] };
const navBtn1 = document.querySelector(".navBtn1");
const navBtn2 = document.querySelector(".navBtn2");
const navBtn3 = document.querySelector(".navBtn3");

navBtn1.addEventListener("click", tabClickHandler);
navBtn2.addEventListener("click", tabClickHandler);
navBtn3.addEventListener("click", tabClickHandler);


