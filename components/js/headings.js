window.nwui = window.nwui || {};

nwui.headings = {
    create(options = {}) {
        const heading = document.createElement(`h${options.level}`);

        heading.className = options.class || "";
        heading.id = options.id || "";
        heading.innerHTML = options.content || "";

        if (typeof options.parent === "string") {
            document.querySelector(options.parent)?.appendChild(heading);
        } else if (options.parent instanceof HTMLElement) {
            options.parent.appendChild(heading);
        }

        return heading;
    }
};