import { getNavBtns } from "./header.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

export let getPageToLoad;

const loadPage = (a = home(), b) => {
    
    if (a >= 0 && a <= 2) {
        b();
    } else {
        a();
    };
};

const loadNewPage = (tabClick) => {
    console.log("pageToLoad called");
    console.log("newPage: ", tabClick);
    if (tabClick === "Home") {
        home();
        loadPage(getPageToLoad);
    } else if (tabClick === "Menu") {
        menu();
        loadPage(getPageToLoad);
    } else if (tabClick === "About") {
        about();
        loadPage(getPageToLoad);
    }
};

const tabClickHandler = (e) => {
    
    console.log(e.target.textContent);
    
    if (e.target.textContent === "Home") {
        console.log("Home tab clicked");
        loadNewPage(e.target.textContent);
    } else if (e.target.textContent === "Menu") {
        console.log("Menu tab clicked");
        loadNewPage(e.target.textContent);
    } else if (e.target.textContent === "About") {
        console.log("About tab clicked");
        loadNewPage(e.target.textContent);
    }
};

getNavBtns().navBtn1.addEventListener("click", tabClickHandler);
getNavBtns().navBtn2.addEventListener("click", tabClickHandler);
getNavBtns().navBtn3.addEventListener("click", tabClickHandler);


