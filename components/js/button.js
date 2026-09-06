window.nwui = window.nwui || {};

nwui.button = {
    create(options = {}) {
        const button = document.createElement("button");

        if (options.class) {
            button.classList.add(options.class);
        };

        if (options.id) {
            button.id = options.id;
        }

        if (typeof options.onclick === "string") {
            button.onclick = new Function("event", options.onclick);
        };

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(button);
            }
        }

        return button;
    }
}