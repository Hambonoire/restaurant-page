const elsHTML = () => {

    const headerContainer = document.querySelector("#header");
    const nav = document.querySelector("nav");

    return {headerContainer, nav };
}

const nodesDOM = () => {

    const logo = document.createElement("h1");
    const textContainer = document.createElement("div");
    const smallText = document.createElement("p");
    const largeText = document.createElement("p");
    const button = document.createElement("button");

    return {style, logo, textContainer, smallText, largeText, button};
}

export const getNavBtns = () => {
        
    const els = elsHTML();

    const navBtns = els.nav.children;

    for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].className = `navBtn${i+1}`;
    }
        
    const navBtn1 = document.querySelector(".navBtn1");
    const navBtn2 = document.querySelector(".navBtn2");
    const navBtn3 = document.querySelector(".navBtn3");
    return {navBtn1, navBtn2, navBtn3};
}

export const header = () => {

    const els = elsHTML();
    const navs = getNavBtns();
    const nodes = nodesDOM();

    els.headerContainer.setAttribute("style", `display: flex; justify-content: space-between; 
        background-color: transparent; padding: 20px 40px`);
            
    els.nav.setAttribute("id", "nav");
    els.nav.setAttribute("style", `display: flex; align-items: center; padding: 0 20px;
        gap: 10px`);
    navs.navBtn1.textContent = "Home";
    navs.navBtn1.setAttribute("style", `background-color: transparent; border: none; 
        padding: 0; font-family: inherit; font-weight: bold; font-style: italic;
        font-size: 18px; color: white; padding: 10px;`);
    navs.navBtn2.textContent = "Menu";
    navs.navBtn2.setAttribute("style", `background-color: transparent; border: none; 
        padding: 0; font-family: inherit; font-weight: bold; font-style: italic;
        font-size: 18px; color: white; padding: 10px;`);
    navs.navBtn3.textContent = "About";
    navs.navBtn3.setAttribute("style", `background-color: transparent; border: none; 
        padding: 0; font-family: inherit; font-weight: bold; font-style: italic;
        font-size: 18px; color: white; padding: 10px;`);

    nodes.logo.setAttribute("id", "logo");
    nodes.logo.setAttribute("style", `display: flex; justify-content: center; 
        align-items: center; font-style: italic; color: white; font-size: 3em; 
        padding: 10px 20px; margin: 0;`);
    nodes.logo.textContent = "Le Hambonoire";

    els.headerContainer.insertBefore(nodes.logo, els.nav);
}
 
