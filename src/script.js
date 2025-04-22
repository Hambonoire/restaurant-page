function pageContent() {
    const nav = document.querySelector("nav");
    nav.setAttribute("id", "nav");
    const navBtns = nav.children;
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].className = `navBtn${i+1}`;
        console.log(navBtns[i]);
    }
}
const greeting = "Hello, Odinite!";
const loadPage = () => pageContent();
export { greeting, loadPage };