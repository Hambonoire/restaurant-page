class HomePage {

    constructor(navbar, contentContainer, toggleBackground, toggleOverlay) {
        this.navbar = navbar;
        this.contentContainer = contentContainer;
        this.toggleBackground = toggleBackground;
        this.toggleOverlay = toggleOverlay;
    }

    render() {
        console.log("HomePage.render() initiated");

        this.contentContainer.innerHTML = ""; // Clear previous content before rendering
        this.contentContainer.style.marginTop = "200px";

        this.toggleBackground(false);
        this.toggleOverlay(true);

        const heading = document.createElement("h1");
        heading.textContent = "Welcome to le Hambonoire!";
        heading.setAttribute("style", `
            color: white; font-size: 2.5rem; font-weight: bold; text-align: center; margin: 0; 
        `);

        const description = document.createElement("p");
        description.textContent = "Experience the bliss of our classic pub-style eats with a french twist!";
        description.setAttribute("style", `
            font-size: 1.5rem; color: white; text-align: center; margin: 0;
        `);

        this.contentContainer.appendChild(heading);
        this.contentContainer.appendChild(description);

        // Ensure content is added to the document
        if (!document.body.contains(this.contentContainer)) {
            document.body.appendChild(this.contentContainer);
        }
    }

    getElement() {
        return this.contentContainer; // Expose the main content container
    }
}

export default HomePage;