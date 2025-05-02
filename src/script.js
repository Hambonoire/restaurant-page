import pageImage from "./images/hamberger.jpg";
export const pageContent = () => {
    // alert("pageContent imported");
    const body = document.querySelector("body");
    // console.log(body);
    body.setAttribute("style", `display: flex; flex-direction: column; padding: 0; 
        height: 100vh; background-image: url(${pageImage}); 
        backdrop-filter: brightness(50%); 
        background-size: cover; background-position: center; 
        background-repeat: no-repeat;)`);
    const headerContainer = document.querySelector("header");
    headerContainer.setAttribute("style", "display: flex; justify-content: space-between; background-color: transparent; padding: 20px 40px");
    const nav = document.querySelector("nav");
    // console.log(nav);
    nav.setAttribute("id", "nav");
    nav.setAttribute("style", "display: flex; align-items: center; padding: 0 20px; gap: 30px");
    const navBtns = nav.children;
    console.log(navBtns.length);
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].className = `navBtn${i+1}`;
    }
    
    const navBtn1 = document.querySelector(".navBtn1");
    const navBtn2 = document.querySelector(".navBtn2");
    const navBtn3 = document.querySelector(".navBtn3");

    console.log(navBtn1);
    navBtn1.textContent = "Home";
    navBtn1.setAttribute("style", "background-color: transparent; border: none; padding: 0; font-family: inherit; font-weight: bold; font-style: italic; font-size: 18px; color: white");
    navBtn2.textContent = "Menu";
    navBtn2.setAttribute("style", "background-color: transparent; border: none; padding: 0; font-family: inherit; font-weight: bold; font-style: italic; font-size: 18px; color: white");
    navBtn3.textContent = "About";
    navBtn3.setAttribute("style", "background-color: transparent; border: none; padding: 0; font-family: inherit; font-weight: bold; font-style: italic; font-size: 18px; color: white");
    
    const logo = document.createElement("h1");
    logo.setAttribute("id", "logo");
    logo.setAttribute("style", "display: flex; justify-content: center; align-items: center; font-style: italic; color: white; font-size: 3em; padding: 10px 20px; margin: 0;");
    logo.textContent = "Le Hambonoire";
    headerContainer.insertBefore(logo, nav);

    const contentContainer = document.querySelector("#content");
    contentContainer.setAttribute("style", "display: flex; flex-direction: column; align-items:center; gap: 20px; height: 100vh; border: solid 2px white; padding-top: 150px;");
    
    const textContainer = document.createElement("div");
    textContainer.setAttribute("style", "display: inherit; flex-direction: inherit; justify-content: center; align-items: center; margin: 0; gap: 15px; border: solid 2px olive; padding: 15px;")

    const smallText = document.createElement("p");
    smallText.className = "text-small";
    smallText.textContent = "Expeerienz!";
    smallText.setAttribute("style", "color: white; font-style: italic; font-size: 1.5em; letter-spacing: 0.2em; text-align: center; margin: 0; ");
    
    
    const largeText = document.createElement("p");
    largeText.className = "text-large";
    largeText.textContent = `Ze graiteest bairgairs
    in ze ol weld!`;
    largeText.setAttribute("style", "white-space: pre; color: white; font-style: italic; font-size: 2.5em; font-weight: bold; letter-spacing: 0.1em; text-align: center; text-wrap: wrap; margin: 0;")
    
    const button = document.createElement("button");
    button.className = "content-btn";
    button.textContent = "Búk ze tébel";
    button.setAttribute("style", "border: none; background-color: olive; color: white; font-family: inherit; font-style: italic; font-size: 1.5em; padding: 10px 20px;")
    
    textContainer.appendChild(smallText);
    textContainer.appendChild(largeText);
    textContainer.appendChild(button);
    contentContainer.appendChild(textContainer);
};
