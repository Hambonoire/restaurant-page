import hambergerImage from "./images/hamberger.jpg";
export const pageDefaults = () => {
  
    document.head.setAttribute("style", `
    * { margin: 0; padding: 0; };
    ::-webkit-scrollbar {
        display: none;
    }
    `);

    document.body.setAttribute("style", `display: flex; 
        display-direction: column; height: 100vh;
        overflow-x: hidden;`);

    const body = document.querySelector("body");
    const header = document.getElementById('#header');

    const backgroundImage = document.createElement("div");

    console.log(backgroundImage);
    backgroundImage.setAttribute("id", "bg-image");
    backgroundImage.setAttribute("style", `display: inherit; 
        flex-direction: inherit; height: 100%; 
        background-image: url(${hambergerImage}); 
        backdrop-filter: brightness(50%); background-size: cover; 
        background-position: center; background-repeat: no-repeat;`
    );

    body.insertBefore(backgroundImage, header);
    
};



