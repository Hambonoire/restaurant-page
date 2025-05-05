import pageImage from "./images/hamberger.jpg";
export const homeContent = () => {

    constClearDisplay = () => {
        
    }

    //HTML elements
    const elsHTML = () => {

        const body = document.querySelector("body");
        const headerContainer = document.querySelector("header");
        const nav = document.querySelector("nav");
        const contentContainer = document.querySelector("#content");

        return {body, headerContainer, nav, contentContainer}
    }

    // DOM Nodes
    const nodesDOM = () => {

        const style = document.createElement('style');
        const logo = document.createElement("h1");
        const textContainer = document.createElement("div");
        const smallText = document.createElement("p");
        const largeText = document.createElement("p");
        const button = document.createElement("button");

        return {style, logo, textContainer, smallText, largeText, button};
    }

    const getNavBtns = () => {
        
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

    const displayPage = () => {

        const els = elsHTML();
        const nodes = nodesDOM();
        const navs = getNavBtns();

        nodes.style.innerHTML = `
            * { margin: 0; padding: 0; }
            ::-webkit-scrollbar {
                display: none;
            }
            `;
        document.head.appendChild(nodes.style);

        els.body.setAttribute("style", `display: flex; flex-direction: column;; 
            height: 100%; background-image: url(${pageImage}); 
            backdrop-filter: brightness(50%); 
            background-size: cover; background-position: center; 
            background-repeat: no-repeat;)`);
        
        els.headerContainer.setAttribute("style", `display: flex; justify-content: space-between; 
            background-color: transparent; padding: 20px 40px`);
        
        els.nav.setAttribute("id", "nav");
        els.nav.setAttribute("style", `display: flex; align-items: center; padding: 0 20px;
            gap: 10px`);  
        
        navs.navBtn1.textContent = "Home";
        navs.navBtn1.setAttribute("style", `background-color: transparent; border: none; 
                padding: 0; font-family: inherit; font-weight: bold; font-style: italic;
                font-size: 18px; color: white; padding: 10px; border: solid 1px white;`);
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

        els.contentContainer.setAttribute("style", `display: flex; flex-direction: 
            column; justify-content: space-between; align-items:center; gap: 20px; 
            height: 100vh; padding-top: 150px;`);
        
        
        nodes.textContainer.setAttribute("style", `display: inherit; flex-direction: 
            inherit; justify-content: center; align-items: center; margin: 0; 
            gap: 15px; padding: 15px;`);

        nodes.smallText.className = "text-small";
        nodes.smallText.textContent = "Expeerienz!";
        nodes.smallText.setAttribute("style", `color: white; font-style: italic; font-size: 1.5em;
            letter-spacing: 0.2em; text-align: center; margin: 0;`);
        
        nodes.largeText.className = "text-large";
        nodes.largeText.textContent = `Ze graiteest ambairgairs
            in ze ol weld!`;
        nodes.largeText.setAttribute("style", `white-space: pre; color: white; font-style: italic;
            font-size: 2.5em; font-weight: bold; letter-spacing: 0.1em; text-align: center;
            text-wrap: wrap; margin: 0;`);
        
        nodes.button.className = "content-btn";
        nodes.button.textContent = "Búk ze tébel";
        nodes.button.setAttribute("style", `border: none; background-color: olive; color: white;
            font-family: inherit; font-style: italic; font-size: 1.5em; 
            padding: 10px 20px;`);

        nodes.textContainer.appendChild(nodes.smallText);
        nodes.textContainer.appendChild(nodes.largeText);
        nodes.textContainer.appendChild(nodes.button);

        els.contentContainer.appendChild(nodes.textContainer);
    };

    return {displayPage, getNavBtns,};
};
