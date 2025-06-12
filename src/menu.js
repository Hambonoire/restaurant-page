class MenuPage {

    constructor(navbar, contentContainer, toggleBackground, toggleOverlay) {
        this.navbar = navbar;
        this.contentContainer = contentContainer;
        this.toggleBackground = toggleBackground;
        this.toggleOverlay = toggleOverlay;
    }

    render() {

        // Clear previous content before rendering
        this.contentContainer.innerHTML = "";
        this.contentContainer.style.marginTop = "100px";

        this.toggleBackground(true);
        this.toggleOverlay(false);

        this.navbar.navContainer.style.borderBottom = "2px solid #7B5E4B";
        this.navbar.navContainer.querySelectorAll("navbar-button, .navbar-logo").forEach(el => {
            el.style.color = "#7B5E4B";
        })

        const heading = document.createElement("h1");
        heading.textContent = "Our Menu";
        heading.style.color = "#5C4033";
        heading.style.textAlign = "center";

        const menuItems = [
            { name: "Brie Burger", ingredients: ["1/4lb. Beef patty", "Brie", "Pickles", "Aioli sauce", "Brioche bun"] },
            { name: "Ailes de Provence", ingredients: ["Deep-fried chicken wings", "Choice of dressing", "Fried tempura asparagus"] },
            { name: "Fries Béarnaise", ingredients: ["Fried potato wedges", "Gruyère cheese", "Shredded roast beef", "Scallions", "Caramelized onions", "Creamy Béarnaise sauce"] },
            { name: "Travers de porc", ingredients: ["Marinated pork ribs", "Rouille sauce", "Coleslaw", "Gougères"] }
        ];

        const menuList = document.createElement("ul");
        menuList.style.listStyle = "none";
        menuList.style.textAlign = "center";
        menuList.style.paddingLeft = "0";
        menuList.style.width = "100%";
        menuList.style.marginTop = "0";
        menuList.style.marginBottom = "50px";


        menuItems.forEach(item => {

            const menuItemContainer = document.createElement("li");
            menuItemContainer.style.display = "flex";
            menuItemContainer.style.flexDirection = "column";
            menuItemContainer.style.alignItems = "center";
            menuItemContainer.style.marginBottom = "10px";

            const itemName = document.createElement("h2");
            itemName.textContent = item.name;
            itemName.style.color = "#5C4033";
            itemName.style.textAlign = "center";
            itemName.style.marginBottom = "5px";

            const itemIngredients = document.createElement("p");
            itemIngredients.textContent = item.ingredients.join(", ");
            itemIngredients.style.color = "#5C4033";
            itemIngredients.style.textAlign = "center";
            itemIngredients.style.fontSize = "1rem";
            itemIngredients.style.maxWidth = "500px";

            menuItemContainer.appendChild(itemName);
            menuItemContainer.appendChild(itemIngredients);
            menuList.appendChild(menuItemContainer);
        });

        this.contentContainer.appendChild(heading);
        this.contentContainer.appendChild(menuList);
    }
}
export default MenuPage;