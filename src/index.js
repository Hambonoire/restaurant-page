import NavBar from "./header.js";
import HomePage from "./home.js";
import MenuPage from "./menu.js";
import ContactPage from "./contact.js";
import hambergerImage from "./images/hamberger.jpg";

console.log("AppState is initializing...");

class AppState {

    constructor() {
        this.navbar = new NavBar(["Home", "Menu", "Contact"], "le Hambonoire");

        this.contentContainer = document.createElement("div");
        this.contentContainer.classList.add("content");
        this.contentContainer.setAttribute("style", `
            display: flex; flex-direction: column; justify-content: flex-start; align-items: center;
            flex-grow: 1; box-sizing: border-box; position: relative; z-index: 2; gap: 40px; margin-top: 200px;
        `);

        this.brightnessOverlay = document.createElement("div");
        this.brightnessOverlay.classList.add("brightness-overlay");
        this.brightnessOverlay.setAttribute("style", `
            position: absolute; inset: 0;
            background-color: rgba(0, 0, 0, 0.5); width: 100%; height: 100vh; z-index: 1;
        `);

        this.fadeOverlay = document.createElement("div");
        this.fadeOverlay.style.cssText = `
            position: fixed; top: 0; left: 0; width; 100%; height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
            opacity: 1;
            transition: opacity 3s ease-out;
            pointer-evnets: none;
        `;
        document.body.appendChild(this.fadeOverlay);

        document.body.appendChild(this.brightnessOverlay);
        document.body.appendChild(this.contentContainer);

        this.currentPage = null; // Track the current page instance
    }

    toggleOverlay(isVisible) {
        this.brightnessOverlay.style.opacity = isVisible ? "1" : "0";
    };

    fadeToLight() {
        console.log("fadeToLight triggered: fading overlay...");
        this.fadeOverlay.style.opacity = "0";
        setTimeout(() => {
            this.fadeOverlay.remove();
            console.log("fadeOverlay removed.");
        }, 1500);
    }

    toggleBackground(isMenuPage, backgroundImage) {
        console.log("toggleBackground triggered: isMenuPage = ", isMenuPage);
        document.body.style.transition = "background-color 2s ease-in-out, background-image 2s ease-in-out"

        if (isMenuPage) {
            console.log("Switching to MenuPage: setting background to white.");
            this.fadeToLight();
            document.body.style.backgroundColor = "#F5F5F5";
            document.body.style.backgroundImage = "none";
            this.toggleOverlay(false);
            this.adjustTextForBrightness(true);

            this.navbar.navContainer.style.borderBottom = "2px solid #5C4033";
            this.navbar.navContainer.querySelectorAll(".navbar-button, .navbar-logo").forEach(el => {
                el.style.color = "#5C4033";
            })
        } else {
            console.log("Switching to HomePage: applying background image...");
            document.body.style.backgroundColor = "";
            document.body.style.backgroundImage = `url(${backgroundImage})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center -180px";
            this.toggleOverlay(true);

            this.adjustTextForBrightness(false);

            this.navbar.navContainer.style.borderBottom = "2px solid white";
            this.navbar.navContainer.querySelectorAll(".navbar-button, .navbar-logo").forEach(el => {
                el.style.color = "white";
            });
        }
    };

    adjustTextForBrightness(isMenuPage) {
        const navbar = this.navbar.navContainer;
        const menuItems = document.querySelectorAll(".menu-item");

        if (isMenuPage) {
            navbar. style.borderBottom = "2px solid #7B5E4B";
            menuItems.forEach(item => {
                item.style.color = "#7B5E4B";
                item.style.borderBottom = "1px solid #7B5E4B";
            })
        } else {
            navbar.style.borderBottom = "#F5F5F5";
            menuItems.forEach(item => {
                item.style.color = "#F5F5F54033";
                item.style.borderBottom = "1px solid #F5F5F5";
            })
        }
    }

    getNavbar() {
        return this.navbar;
    }

    getContentContainer() {
        return this.contentContainer;
    }

    createHomePage() {
        return new HomePage(this.navbar, this.contentContainer, () => this.toggleBackground(false, hambergerImage), () => this.toggleOverlay(true));
    }

    createMenuPage() {
        return new MenuPage(this.navbar, this.contentContainer, () => this.toggleBackground(true), () => this.toggleOverlay(false));
    }

    createContactPage() {
        return new ContactPage(this.navbar, this.contentContainer, () => this.toggleBackground(true), () => this.toggleOverlay(false));
    }

    render() {
        this.navbar.render();

        console.log("Rendering HomePage and applying background image...");
        this.toggleBackground(false);

        this.currentPage = this.createHomePage();
        this.currentPage.render();

        document.querySelectorAll(".navbar-button").forEach(button => {
            button.addEventListener("click", () => {
                this.loadPage(button.textContent);
            });
        });

        const navbarLogo = document.querySelector(".navbar-logo");
        if (navbarLogo) {
            navbarLogo.addEventListener("click", () => {
                console.log("Navbar logo clicked. Returning to HomePage.");
                this.loadPage("Home");
            });
        }
    }

    loadPage(pageName) {
        console.log(`loadPage called: Navigating to ${pageName}`);

        if (this.currentPage) {
            console.log(`Clearing previous page: ${this.currentPage.constructor.name}`);
            this.contentContainer.innerHTML = "";
        }

        if (pageName === "Home") {
            console.log("Creating HomePage...");
            this.currentPage = this.createHomePage();
        } else if (pageName === "Menu") {
            console.log("Creating MenuPage...");
            this.currentPage = this.createMenuPage();
        } else if (pageName === "Contact") {
            console.log("Creating ContactPage...");
            this.currentPage = this.createContactPage();
        }

        console.log(`Rendering new page: ${this.currentPage.constructor.name}`);
        this.currentPage.render();
    }
}

// Initialize application state
const appState = new AppState();

appState.render();