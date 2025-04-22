function pageContent() {
    // const body = document.querySelector("body");
    // body.setAttribute("padding: 0;");
    const headerContainer = document.querySelector("header");
    headerContainer.setAttribute("style", "display: flex; justify-content: space-evenly; min-height: 50px; padding: 0 40px; background-color: pink; gap: 40px; padding: 20px 0;")
    const nav = document.querySelector("nav");
    nav.setAttribute("id", "nav");
    nav.setAttribute("style", "display: flex; align-items: center; gap: 20px; border: solid 2px black; padding: 0 20px;")
    const navBtns = nav.children;
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].className = `navBtn${i+1}`;
    }
    navBtns[0].textContent = "Home";
    // navBtnx[0].setAttribute("style", "background-color: transparent; border-radius: 0.5em; font-style: italic;");
    navBtns[1].textContent = "Menu";
    // navBtnx[1].setAttribute("style", "background-color: transparent; border-radius: 0.5em; font-style: italic;");
    navBtns[2].textContent = "About";
    // navBtnx[2].setAttribute("style", "background-color: transparent; border-radius: 0.5em; font-style: italic;")
    const logo = document.createElement("h1");
    logo.setAttribute("id", "logo");
    logo.setAttribute("style", "display: flex; font-style: italic; border: solid 2px black; padding: 10px 20px; margin: 0;");
    logo.textContent = "My Restaraunt";
    headerContainer.insertBefore(logo, nav);
    
    // alert(`${navBtns[0].getAttribute("class")},  
    // ${navBtns[1].getAttribute("class")}, 
    // ${navBtns[2].getAttribute("class")}`);
}
// const nav = document.querySelector("nav");
// nav.setAttribute("id", "nav");
// const navBtns = nav.children;
// let buttons = [];
// for (let i = 0; i < navBtns.length; i++) {
//     navBtns[i].className = `navBtn${i+1}`;
//     buttons.push(navBtns[i]);
// };

const greeting = "Hello, Odinite!";
// const checkCode = () => {
//     alert(`${buttons[0].getAttribute("class")},  ${buttons[1].getAttribute("class")}, ${buttons[2].getAttribute("class")}`);
// };
// const loadPage = () => pageContent();
export { greeting, pageContent};