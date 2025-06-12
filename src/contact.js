class ContactPage {
    constructor(navbar, contentContainer, toggleBackground, toggleOverlay) {
        this.navbar = navbar;
        this.contentContainer = contentContainer;
        this.toggleBackground = toggleBackground;
        this.toggleOverlay = toggleOverlay;
    }

    render() {
        // ✅ Clear previous content
        this.contentContainer.innerHTML = "";
        this.contentContainer.style.marginTop = "100px";

        // ✅ Apply menu-specific background settings
        this.toggleBackground(true);
        this.toggleOverlay(false);

        this.navbar.navContainer.style.borderBottom = "2px solid #5C4033";
        this.navbar.navContainer.querySelectorAll(".navbar-button, .navbar-logo").forEach(el => {
            el.style.color = "#5C4033";
        });

        // ✅ Create reservation form elements
        const heading = document.createElement("h1");
        heading.textContent = "Book a Table";
        heading.style.color = "#5C4033";
        heading.style.textAlign = "center";

        const form = document.createElement("form");
        form.style.cssText = `
            display: flex; flex-direction: column; align-items: center; gap: 15px;
            padding: 20px; width: 100%; max-width: 400px;
        `;

        const createInputField = (labelText, type, name, placeholder) => {
            const label = document.createElement("label");
            label.textContent = labelText;
            label.style.color = "#5C4033";
            label.style.fontSize = "1rem";

            const input = document.createElement("input");
            input.type = type;
            input.name = name;
            input.placeholder = placeholder;
            input.style.cssText = `
                padding: 10px; width: 100%; border: 1px solid #5C4033;
                border-radius: 5px; font-size: 1rem;
            `;

            const container = document.createElement("div");
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.width = "100%";
            container.appendChild(label);
            container.appendChild(input);
            return container;
        };

        // Create form fields
        const nameField = createInputField("Name (Reservation Under)", "text", "name", "Enter full name");
        const phoneField = createInputField("Phone Number", "tel", "phone", "Enter phone number");
        const timeField = createInputField(
            "Reservation Date & Time", //Label text
            "datetime-local", //input type for both date & time
            "arrivalDateTime", //Input name
            "Select date & time" //Placeholder text
        );
        const partySizeField = createInputField("Party Size", "number", "partySize", "Enter number of guests");

        // ✅ Submit button
        const submitButton = document.createElement("button");
        submitButton.textContent = "Reserve Table";
        submitButton.style.cssText = `
            padding: 12px 20px; font-size: 1rem; background-color: #5C4033;
            color: white; border: none; border-radius: 5px; cursor: pointer;
            transition: background-color 0.3s ease;
        `;
        submitButton.addEventListener("mouseover", () => submitButton.style.backgroundColor = "#7B5E4B");
        submitButton.addEventListener("mouseleave", () => submitButton.style.backgroundColor = "#5C4033");

        // ✅ Append form elements
        form.appendChild(nameField);
        form.appendChild(phoneField);
        form.appendChild(timeField);
        form.appendChild(partySizeField);
        form.appendChild(submitButton);

        this.contentContainer.appendChild(heading);
        this.contentContainer.appendChild(form);
    }
}
export default ContactPage;