class NavBar {
    constructor(buttonLabels, logoText) {
        this.navContainer = document.createElement("nav");
        this.navContainer.classList.add("navBar");
        this.navContainer.setAttribute("style", `
        width: 100vw; height: 70px;
        display: flex; justify-content: space-between; align-items: center; 
        padding: 15px 30px; box-sizing: border-box;
        margin: 0; position: relative; z-index: 2; border-bottom: 2px solid white;
        `);
        this.buttonLabels = buttonLabels;  
        this.logoText = logoText;
    }

    render() {

        this.navContainer.innerHTML = "";

        this.createLogo();
        this.createButtons();

        // Ensure navbar is consistently added to the DOM
        if (!document.body.contains(this.navContainer)) {
            document.body.prepend(this.navContainer);
        }
    }

    createLogo() {
        const logo = document.createElement("div");
        logo.classList.add("navbar-logo");
        logo.textContent = this.logoText;
        logo.setAttribute("style", `
            color: white; font-size: 2rem; font-style: italic;
            margin-right: auto; cursor: pointer;
        `);
        this.navContainer.appendChild(logo);
    }

    createButtons() {
        this.buttonLabels.forEach(label => {
            const button = document.createElement("button");
            button.textContent = label;
            button.classList.add("navbar-button");
            button.setAttribute("style", `
                padding: 10px 0; margin: 0 0 0 20px; border: none; cursor: pointer;
                background-color: transparent; color: white; font-size: 1rem;
            `);
            this.navContainer.appendChild(button);
        });
    }
}

export default NavBar;
