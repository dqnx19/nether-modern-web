window.nwui = window.nwui || {};

nwui.header = {
    create(options = {}) {
        const header = document.createElement("header");

        if (options.class) {
            header.classList.add(options.class);
        }

        if (options.id) {
            header.id = options.id;
        }

        if (options.logo) {
            const logo = document.createElement("img");

            logo.src = options.logo;
            header.appendChild(logo);
        }

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(header);
            }
        }

        return header;
    },

    changeLogo(options = {}) {
        if (options.selector) {
            const selector = typeof options.selector === "string"
                ? document.querySelector(options.selector)
                : options.selector;

            if (selector instanceof HTMLImageElement) {
                selector.src = options.src;
            }
        }
    }
};