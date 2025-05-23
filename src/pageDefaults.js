import hambergerImage from "./images/hamberger.jpg";
export const pageDefaults = () => {
  
    document.head.setAttribute("style", `
    * { margin: 0; padding: 0; };
    ::-webkit-scrollbar {
        display: none;
    }
    `);

    const body = document.querySelector("body");
    body.setAttribute("style", `height: 100vh; overflow-x: hidden; 
        background-image: url(${hambergerImage}); 
        backdrop-filter: brightness(50%); background-size: cover; 
        background-position: center; background-repeat: no-repeat;`);

    const contentContainer = document.querySelector("#content");
    contentContainer.setAttribute("style", `display: flex; flex-direction: 
        column; justify-content: space-between; align-items:center; gap: 20px; 
        padding-top: 150px;`);
    
};



