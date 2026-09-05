window.nwui = window.nwui || {};

nwui.tabs = {

    create(options = {}) {

        const tabs = document.createElement("div");
        tabs.className = "tabs";

        if (options.class) {
            tabs.classList.add(options.class);
        }

        if (options.id) {
            tabs.id = options.id;
        }


        const buttons = document.createElement("div");
        buttons.className = "buttons";

        const contents = document.createElement("div");
        contents.className = "contents";


        tabs.appendChild(buttons);
        tabs.appendChild(contents);


        // Parent může být selector nebo DOM element
        if (options.parent) {

            let parent;

            if (typeof options.parent === "string") {
                parent = document.querySelector(options.parent);
            } else {
                parent = options.parent;
            }

            if (parent) {
                parent.appendChild(tabs);
            }
        }


        // Přidání karet
        if (Array.isArray(options.tabs)) {

            options.tabs.forEach(card => {

                nwui.tabs.addTab({
                    ...card,
                    parent: tabs
                });

            });

        }


        // Aktivace první karty
        if (options.tabs?.length) {

            const firstCard = tabs.querySelector(
                `.content[data-tab-id="${options.tabs[0].id}"]`
            );

            if (firstCard) {
                nwui.tabs.displayTab({
                    selector: firstCard
                });
            }
        }


        return tabs;
    },


    addTab(options = {}) {

        let parent;

        if (typeof options.parent === "string") {
            parent = document.querySelector(options.parent);
        } else {
            parent = options.parent;
        }

        if (!parent) {
            return null;
        }


        const buttons = parent.querySelector(".buttons");
        const contents = parent.querySelector(".contents");

        if (!buttons || !contents) {
            return null;
        }


        // Content
        const content = document.createElement("div");

        content.className = "content";

        if (options.class) {
            content.classList.add(options.class);
        }

        if (options.id) {
            content.dataset.tabId = options.id;
        }

        content.innerHTML = options.innerHTML ?? "";

        contents.appendChild(content);


        // Button
        const button = document.createElement("button");

        button.className = "button";

        if (options.class) {
            button.classList.add(options.class);
        }

        // ID tabu
        if (options.id) {
            button.dataset.tabId = options.id;
        }


        // Image
        if (options.image) {

            const image = document.createElement("img");

            image.src = options.image;
            image.className = "image";

            button.appendChild(image);
        }


        // Title
        if (options.title) {

            const title = document.createElement("span");

            title.className = "title";
            title.textContent = options.title;

            button.appendChild(title);
        }


        // Click
        button.onclick = () => {

            nwui.tabs.displayTab({
                selector: content
            });

        };


        buttons.appendChild(button);


        return content;
    },


    displayTab(options = {}) {

        // Selector může být string nebo DOM element
        let card;

        if (typeof options.selector === "string") {
            card = document.querySelector(options.selector);
        } else {
            card = options.selector;
        }

        if (!card) {
            return false;
        }


        const tabs = card.closest(".tabs");

        if (!tabs) {
            return false;
        }


        // Deaktivace všech contentů
        tabs.querySelectorAll(
            ".contents .content.active"
        ).forEach(content => {

            content.classList.remove("active");

        });


        // Aktivace vybraného contentu
        card.classList.add("active");


        // Najdeme button podle ID karty
        const tabId = card.dataset.tabId;

        tabs.querySelectorAll(
            ".buttons .button.active"
        ).forEach(button => {

            button.classList.remove("active");

        });


        const button = tabs.querySelector(
            `.buttons .button[data-tab-id="${tabId}"]`
        );

        if (button) {
            button.classList.add("active");
        }


        return true;
    }
};