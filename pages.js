import { createElement, importCSSFromList, importJSFromList, setFavicon, setAttribute, setTitle, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter, /* importCSSFromList, importJSFromList */ getURLParam } from "https://js.nether.click/nether.js"

await importCSSFromList([
    "fonts/lexend/lexend.css",

    "components/css/a.css",
    "components/css/all.css",
    "components/css/app-drawer.css",

    "components/css/body.css",
    "components/css/button.css",

    "components/css/cards.css",
    "components/css/context-menu.css",
    "components/css/copy-box.css",

    "components/css/footer.css",
    "components/css/form.css",

    "components/css/grouped-list.css",

    "components/css/header.css",
    "components/css/headings.css",

    "components/css/img.css",

    "components/css/lists.css",

    "components/css/main.css",
    "components/css/menu-bar.css",

    "components/css/p.css",

    "components/css/section.css",
    "components/css/services-icons.css",

    "components/css/table.css",
    "components/css/tabs.css",
    "components/css/timeline.css",
    "components/css/popup.css",
    "components/css/train-formation.css"
])

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://nether.click/js/import-app-check.js",

    "components/js/a.js",
    "components/js/all.js",
    "components/js/app-drawer.js",

    "components/js/body.js",
    "components/js/button.js",

    "components/js/cards.js",
    "components/js/copy-box.js",

    "components/js/footer.js",
    "components/js/form.js",

    "components/js/headings.js",

    "components/js/menu-bar.js",

    "components/js/tabs.js",
    "components/js/timeline.js",
    "components/js/popup.js",

    "lib/marked.js"
])

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

const maindb = await fetch("json/pages.json").then(r => r.json());

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button onclick="showHome()" class="logo" title="Shows Home Page">
        <img src="img/icons/favicon.svg" alt="Nether Web UI Logo">
    </button>
`);

setContentOfFooter(`
        <button onclick="showHome()" title="shows home page">
            <img src="img/icons/favicon.svg" alt="home page link icon">
        </button>
    `
    +
    maindb.map(element => `
        <button onclick="${element.func}" title="Shows ${element.name} page">
            <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
        </button>
    `).join("")
);

window.showHome = showHome
window.showComponents = showComponents
window.showAbout = showAbout

marked.use({
    renderer: {
        code({ text, lang }) {
            const escapeHtml = (text) => {
                return text
                    .replaceAll("&", "&amp;")
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;")
                    .replaceAll("'", "&#039;");
            };

            return `
                <div class="copy-box">
                    <div class="head">
                        <span class="language">${escapeHtml(lang || "")}</span>
                    </div>
                    <div class="body">
                        <div class="code">${escapeHtml(text)}</div>
                    </div>
                </div>
            `;
        }
    }
});

async function showHome() {
    scrollUp();
    setTitle("Nether Web UI");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        content: "Welcome to Nether Web UI",
        parent: "main",
    });

    nwui.cards.create({
        parent: "main",
    });

    maindb.forEach(page => {
        nwui.cards.addCard({
            onclick: page.func,
            image: `img/links-icons/${page.techname}.svg`,
            heading: page.name,
            parent: ".cards"
        })
    });
}

async function showComponents() {
    scrollUp();
    setTitle("Components - Nether Web UI");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        content: "Components",
        parent: "main"
    })

    nwui.tabs.create({
        parent: "main",
        id: "components"
    })

    const components = await fetch("json/components.json").then(r => r.json());

    components.forEach(async component => {
        const readme = await fetch(`components/md/${component.techname}.md`).then(r => r.text());

        nwui.tabs.addTab({
            title: component.name,
            id: component.techname,
            parent: "#components",
            innerHTML: marked.parse(readme)
        })
    })
}

async function showAbout() {
    scrollUp();
    setTitle("About - Nether Web UI");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "About"
    })

    nwui.tabs.create({
        parent: "main",
        id: "about",
        tabs: [
            {
                title: "What is Nether Web UI",
                id: "what_is_nether_web_ui",
                innerHTML: `
                    <ul>
                        <li>Web service providing free css and js components and basic styles for web developement</li>
                    </ul>
                `
            },
            {
                title: "History",
                id: "history",
                innerHTML: ``
            }
        ]
    })

    const db = await fetch("json/about.json").then(data => data.json());

    nwui.timeline.create({
        parent: "#history",
        id: "timeline",
    })

    db.history.forEach(event => {
        nwui.timeline.addEvent({
            parent: "#timeline",
            date: event.date,
            description: event.content
        })
    })
}

showHome();