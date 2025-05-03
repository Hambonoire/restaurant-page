import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";


function pageToLoad(def = homeContent, newPage) {

    console.log("newPage: ", newPage);
    if (newPage === "Home") {
        homeContent();
    } else if (newPage === "Menu") {
        menuContent();
    } else if (newPage === "About") {
        aboutContent();
    } else {
        def();
    }
};

const tabsContainer = pageContent().children;
console.log(tabsContainer);
const tabClickHandler = (e) => {
    
    console.log(e.target.textContent);

    if (e.target.textContent === "Home") {
        console.log("Home tab clicked");
        pageToLoad(e.target.textContent);
    } else if (e.target.textContent === "Menu") {
        console.log("Menu tab clicked");
        pageToLoad(e.target.textContent);
    } else if (e.target.textContent === "About") {
        console.log("About tab clicked");
        pageToLoad(e.target.textContent);
    }
}

Array.from(tabsContainer).forEach(tab => {
    tab.addEventListener('click', tabClickHandler);
});

pageToLoad();

