export const about = () => {    

    function removeContent() {

        homeNodes().contentContainer.removeChild(homeNodes().textContainer);
        homeNodes().contentContainer.removeChild(homeNodes().button);

        console.log("content removed");
    }
    
    removeContent();

    // console.log("nav in home.js: ", headerEls().nav.children);

    function removeNavBorders() {

        let navs = header().headerEls().navBtns;

        for (let i = 0; i < navs.length; i++) {

            navs[i].style.setProperty("border", "none");

            console.log(navs[i]);
        }
    }
    removeNavBorders();

    function addBorder() {

        header().headerEls().navBtns[2].style.setProperty("border", "solid 2px white");
    }
    addBorder();

    homeNodes().contentContainer.appendChild(homeNodes().textContainer);
    homeNodes().contentContainer.appendChild(homeNodes().button);
    
    homeNodes().textContainer.appendChild(homeNodes().smallText);
    homeNodes().textContainer.appendChild(homeNodes().largeText);

};