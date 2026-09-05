window.nwui = window.nwui || {};

nwui.copyBox = {
    create(options = {}) {
        const element = document.createElement("div");

        element.className = `copy-box ${options.class ?? ""}`;
        element.id = options.id ?? "";

        element.innerHTML = `
            <div class="head">
                <span class="language">${options.language ?? ""}</span>
            </div>
            <div class="body">
                <div class="code"></div>
            </div>
        `;

        const code = element.querySelector(".code");

        if (options.render) {
            code.innerHTML = options.code ?? "";
        } else {
            code.textContent = options.code ?? "";
        }

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(element);
            }
        }

        return element;
    }
};