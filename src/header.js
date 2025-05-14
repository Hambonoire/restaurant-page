const headerEls = () => {

    const headerContainer = document.querySelector("#header");
    headerContainer.setAttribute("style", `display: flex; justify-content: space-between; 
        background-color: transparent; padding: 20px 40px`);

    const nav = document.querySelector("nav");
    nav.setAttribute("id", "nav");
    nav.setAttribute("style", `display: flex; align-items: center; padding: 0 20px;
        gap: 10px`);

    const navBtns = nav.children;

    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].setAttribute("style", `background-color: transparent; border: none; 
            padding: 0; font-family: inherit; 
            font-weight: bold; font-style: italic; 
            font-size: 18px; color: white; padding: 10px;`)
        navBtns[i].className = `navBtn${i+1}`;
        if (i === 0) {
            navBtns[i].textContent = "Home";
        } else if (i === 1) {
            navBtns[i].textContent = "Menu";
        } else if (i === 2) {
            navBtns[i].textContent = "About";
        }
    }
    return {headerContainer, nav};
};

const headerLogo = () => {

    const logo = document.createElement("h1");
    logo.setAttribute("id", "logo");
    logo.textContent = "Le Hambonoire";
    logo.setAttribute("style", `display: flex; justify-content: center; 
        align-items: center; font-style: italic; color: white; font-size: 3em; 
        padding: 10px 20px; margin: 0;`);

    return {logo};
};

export const header = () => {

    headerEls().headerContainer.insertBefore(headerLogo().logo, headerEls().nav);
};
 
