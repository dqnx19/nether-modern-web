window.nwui = window.nwui || {};

nwui.cards = {
    create(options = {}) {
        const cards = document.createElement("div");

        cards.className = "cards"
        if (options.class) {
            cards.classList.add(options.class);
        }

        if (options.id) {
            cards.id = options.id;
        }

        if (Array.isArray(options.cards)) {
            options.cards.forEach(cardSrc => {
                const card = document.createElement("button");

                card.className = "card"

                if (cardSrc.class) {
                    card.classList.add(cardSrc.class);
                }

                if (cardSrc.id) {
                    card.id = cardSrc.id;
                }

                if (typeof cardSrc.onclick === "string") {
                    card.onclick = new Function("event", cardSrc.onclick);
                }

                if (cardSrc.image) {
                    const img = document.createElement("img");

                    if (cardSrc.image) {
                        img.src = cardSrc.image;
                    }

                    if (cardSrc.heading) {
                        img.alt = cardSrc.heading;
                    }

                    card.appendChild(img);
                }

                if (cardSrc.heading) {
                    const span = document.createElement("span");
                    span.className = "heading";
                    span.textContent = cardSrc.heading;
                    card.appendChild(span);
                }

                cards.appendChild(card)
            });
        }

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(cards);
            }
        }

        return cards;
    },

    addCard(options = {}) {
        const card = document.createElement("button");

        card.className = "card";

        if (options.class) {
            card.classList.add(options.class);
        }

        if (options.id) {
            card.id = options.id;
        }

        if (typeof options.onclick === "string") {
            card.onclick = new Function("event", options.onclick);
        }

        if (options.image) {
            const img = document.createElement("img");

            if (options.image) {
                img.src = options.image;
            }

            if (options.heading) {
                img.alt = options.heading;
            }

            card.appendChild(img);
        }

        if (options.heading) {
            const span = document.createElement("span");

            span.className = "heading";
            span.textContent = options.heading;

            card.appendChild(span);
        }

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent && parent.classList.contains("cards")) {
                parent.appendChild(card);
            }
        }

        return card;
    }
}