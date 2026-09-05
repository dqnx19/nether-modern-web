window.nwui = window.nwui || {};

nwui.popup = {
    create(options = {}) {
        const element = document.createElement("div");

        element.className = `popup ${options.class ?? ""}`.trim();
        element.id = options.id ?? "";
        element.innerHTML = options.innerHTML ?? "";

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(element);
            }
        }

        return element;
    },

    remove(options = {}) {
        if (!options.selector) return;

        const element = typeof options.selector === "string"
            ? document.querySelector(options.selector)
            : options.selector;

        if (element) {
            element.remove();
        }
    }
};