import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

homeContent().displayPage();

const navChildren = homeContent().getNavBtns();

const tabToLoad = (newPage) => {
    console.log("pageToLoad called");
    console.log("newPage: ", newPage);
    if (newPage === "Home") {
        homeContent();
    } else if (newPage === "Menu") {
        menuContent();
    } else if (newPage === "About") {
        aboutContent();
    }
};

const tabClickHandler = (e) => {
    
    console.log(e.target.textContent);

    if (e.target.textContent === "Home") {
        console.log("Home tab clicked");
        tabToLoad(e.target.textContent);
    } else if (e.target.textContent === "Menu") {
        console.log("Menu tab clicked");
        tabToLoad(e.target.textContent);
    } else if (e.target.textContent === "About") {
        console.log("About tab clicked");
        tabToLoad(e.target.textContent);
    }
};

const loopNavs = () => {
    for (let nav in navChildren) {

        navChildren[nav].addEventListener("click", tabClickHandler);
    };
};

loopNavs();



