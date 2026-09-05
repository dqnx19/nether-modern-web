window.nwui = window.nwui || {};

nwui.timeline = {
    create(options = {}) {
        const timeline = document.createElement("div");
        timeline.className = "timeline";

        if (options.class) {
            timeline.classList.add(options.class);
        }
        if (options.id) {
            timeline.id = options.id;
        }

        if (options.events && Array.isArray(options.events)) {
            options.events.forEach(event => {
                const eventDiv = document.createElement("div");

                eventDiv.className = "event"
                eventDiv.innerHTML = `
                    <div class="marker"></div>
                    <div class="date">${event.date}</div>
                    <div class="description">${event.description}</div>
                `

                timeline.appendChild(eventDiv)
            });
        }

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(timeline);
            }
        }
    },

    addEvent(options = {}) {
        const eventDiv = document.createElement("div");

        eventDiv.className = "event"
        eventDiv.innerHTML = `
            <div class="marker"></div>
            <div class="date">${options.date}</div>
            <div class="description">${options.description}</div>
        `

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(eventDiv);
            }
        }
    }
}