window.nwui = window.nwui || {};

nwui.detailsPanel = {
    create(options = {}) {
        const detailsPanel = document.createElement("div");
        detailsPanel.className = "details-panel";

        if (options.class) {
            detailsPanel.classList.add(options.class);
        }

        if (options.id) {
            detailsPanel.id = options.id;
        }

        options.details.forEach(detailSrc => {
            const detail = document.createElement("div");
            detail.className = "detail";
            detailsPanel.appendChild(detail);

            const image = document.createElement("img");
            image.src = detailSrc.image;
            detail.appendChild(image);

            const text = document.createElement("span");
            text.textContent = detailSrc.text;
            detail.appendChild(text);
        });

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(detailsPanel);
            }
        }
    },

    addDetail(options = {}) {
        const detail = document.createElement("div");
        detail.className = "detail";
        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(detail);
            }
        }

        const image = document.createElement("img");
        image.src = options.image;
        detail.appendChild(image);

        const text = document.createElement("span");
        text.textContent = options.text;
        detail.appendChild(text);

        return detail;
    }
}