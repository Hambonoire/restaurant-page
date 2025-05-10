export const pageDefaults = () => {

    const style = document.createElement('style');

    style.innerHTML = `
    * { margin: 0; padding: 0; }
    ::-webkit-scrollbar {
        display: none;
    }
    `;

    document.head.appendChild(style);
};



