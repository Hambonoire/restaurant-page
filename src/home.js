//HTML elements
const contentNodes = () => {

    const textContainer = document.createElement("div");
    const smallText = document.createElement("p");
    const largeText = document.createElement("p");
    const button = document.createElement("button");

    return {textContainer, smallText, largeText, button};
}


export const home = () => {
    
    const nodes = contentNodes();
        
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







