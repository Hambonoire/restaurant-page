import menuImage from "./images/menu.jpg"
import { pageDefaults } from "./pageDefaults.js";
import { header } from "./header.js";
import { getPageToLoad } from "./index.js";

export const menu = () => {

    window.location.reload();
    pageDefaults();
    header();

    const nodes = nodesDOM();
    const els = elsHTML();

    els.body.setAttribute("style", `display: flex; flex-direction: column;; 
        height: 100vh; overflow-x: hidden; background-image: url(${menuImage}); 
        backdrop-filter: brightness(50%); 
        background-size: cover; background-position: center; 
        background-repeat: no-repeat;)`);

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
    console.log("getPageToLoad: ", getPageToLoad);
};