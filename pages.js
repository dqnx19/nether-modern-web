import { highlightSyntax, setFavicon, setAttribute, setTitle, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter, importCSSFromList, importJSFromList, getURLParam } from "https://js.nether.click/nether.js"

importCSSFromList([
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
    "components/css/tabs-switching.css",
    "components/css/timeline.css",
    "components/css/train-formation.css"
])

importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://nether.click/js/import-app-check.js",

    "components/js/a.js",
    "components/js/all.js",
    "components/js/app-drawer.js",

    "components/js/body.js",
    "components/js/button.js",

    "components/js/context-menu.js",
    "components/js/copy-box.js",

    "components/js/footer.js",
    "components/js/form.js",

    "components/js/menu-bar.js",

    "components/js/tabs-switching.js",
    "components/js/timeline.js",

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
        <button onclick="${element.func}()" title="shows ${element.name} page">
            <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
        </button>
    `).join("")
);

window.showHome = showHome
window.showComponents = showComponents
window.showAbout = showAbout
window.showComponent = showComponent

const menu = document.createElement("div");

menu.id = "menu";
menu.className = "context-menu";

menu.innerHTML = `
    <button onclick="location.reload()">Refresh</button>
    <button onclick="copyURL()">Copy URL</button>
    <button onclick="copy()">Copy</button>
`;

document.body.appendChild(menu);

async function showHome() {
    scrollUp();
    setTitle("Nether Web UI")
    setContentOfMain(`
        <h1>Welcome to Nether Web UI</h1>
        <div class="cards"></div>
    `)

    const cards = document.querySelector(".cards");

    maindb.forEach(element => {
        const card = document.createElement("button");

        card.className = "card";
        card.onclick = () => {
            window[element.func]();
        };
        card.innerHTML = `
            <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
            <span>${element.name}</span>
        `;

        cards.appendChild(card);
    });
}

function showComponents() {
    scrollUp();
    setTitle("Components - Nether Web UI")
    setContentOfMain(`
        <h1>Components</h1>
        <section> 
            <div class="grouped-list" id="components-list"></div>
        </section>
    `)

    const container = document.getElementById("components-list");

    components.forEach(component => {
        const button = document.createElement("button");

        button.textContent = component.name;

        button.className = "item"
        button.onclick = () => {
            showComponent(component.name, component.techname);
        };

        container.appendChild(button);
    });
}

const components = await fetch("json/components.json").then(r => r.json());

async function showComponent(nameUpperCase, nameLowerCase, tab = "css") {
    scrollUp();
    setTitle(`${nameUpperCase} - Nether Web UI`)
    setContentOfMain(`
        <h1>${nameUpperCase}</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs"></div>
                
            </div>
        </section>
    `)

    const languages = [
        { 
            techname: "css",
            name: "CSS"
        }, 
        { 
            techname: "js",
            name: "JS"

        },
        { 
            techname: "md",
            name: "MD"
        }
    ]

    const tabs = document.querySelector(".tabs");
    const tabs_switching = document.querySelector(".tabs-switching")

    languages.forEach(element => {
        const tab = document.createElement("button");

        tab.className = "tab";
        tab.onclick = () => showTab(element.techname, this);
        tab.dataset.tab = element.techname
        tab.innerText = element.name

        tabs.appendChild(tab)
    })

    languages.forEach(element => {
        const tab_content = document.createElement("div");

        tab_content.className = "tab-content";
        tab_content.id = element.techname;
        tab_content.innerHTML = "";

        tabs_switching.appendChild(tab_content)
    })

    const css = await fetch(`components/css/${nameLowerCase}.css`)
        .then(response => {
            if (!response.ok) return `fetching "${nameLowerCase}" failed`;
            return response.text();
        })

    const js = await fetch(`components/js/${nameLowerCase}.js`)
        .then(response => {
            if (!response.ok) return `fetching "${nameLowerCase}" failed`;
            return response.text();
        })

    const md = await fetch(`components/md/${nameLowerCase}.md`)
        .then(response => {
            if (!response.ok) return `fetching "${nameLowerCase}" failed`;
            return response.text();
        })

    const cssImport1 = nwui.copyBox.create({
        parent: ".tab-content#css",
        language: "CSS",
        code: `@import url("https://web-ui.nether.click/components/css/${nameLowerCase}.css");`
    });

    const cssImport2 = nwui.copyBox.create({
        parent: ".tab-content#css",
        language: "HTML",
        code: `<link rel="stylesheet" href="https://web-ui.nether.click/components/css/${nameLowerCase}.css">`
    });

    const cssCode = nwui.copyBox.create({
        parent: ".tab-content#css",
        language: "CSS",
        code: css
    })

    nwui.copyBox.create({
        parent: ".tab-content#js",
        language: "JS",
        code: js
    })

    nwui.copyBox.create({
        parent: ".tab-content#md",
        language: "Markdown",
        code: md,
        render: true
    })

    showTab("#css")
}

async function showAbout() {
    scrollUp()
    setTitle("About - Nether Web UI")
    setContentOfMain(`
        <h1>About</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('what_is_nether_web_ui', this)" data-tab="what_is_nether_web_ui">What is Nether Web UI</button>
                    <button class="tab" onclick="showTab('history', this)" data-tab="history">History</button>
                </div>
                <div class="tab-content active" id="what_is_nether_web_ui">
                    <h2>What is Nether Web UI</h2>
                    <ul>
                        <li>Web service providing free css and js components and basic styles for web developement</li>
                    </ul>
                </div>
                <div class="tab-content" id="history">
                    <h2>History</h2>
                    <div class="timeline"></div>
                </div>
            </div>
        </section>
    `)

    const db = await fetch("json/about.json").then(data => data.json());
    const timeline = document.querySelector(".timeline")

    db.history.forEach(element => {
        const event = document.createElement("div");

        event.className = "event"
        event.innerHTML = `
            <span class="marker"></span>
            <span class="date">${element.date}</span>
            <span class="content">${element.content}</span>
        `
        
        timeline.appendChild(event)
    })
}

showHome();