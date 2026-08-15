nwui.image = {
    create(options = {}) {
        const image = document.createElement("img");

        image.className = options.class || "";
        image.id = options.id || "";
        image.src = options.source || "https://web-ui.nether.click/img/image-load-failed.png";
        image.alt = options.alt || "";
        image.width = options.width || "";
        image.title = options.title || "";

        if (typeof options.parent === "string") {
            document.querySelector(options.parent)?.appendChild(image);
        } else if (options.parent instanceof HTMLElement) {
            options.parent.appendChild(image);
        }

        return image;
    }
};