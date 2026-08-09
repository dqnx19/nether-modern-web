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
    "components/js/timeline.js"
])

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button onclick="showHome()" class="logo" title="Shows Home Page">
        <img src="img/icons/favicon.svg" alt="Nether Web UI Logo">
    </button>
`);

setContentOfFooter(`
    <button onclick="showHome()" title="Shows Home Page">
        <img src="img/icons/favicon.svg" alt="Nether Web UI Logo">
    </button>
    <button onclick="showComponents()" title="Shows Components Page">
        <img src="img/links-icons/components.svg" alt="Components page link icon">
    </button>
    <button onclick="showAbout()" title="Shows About Page">
        <img src="img/links-icons/about.svg" alt="About page link icon">
    </button>
`);

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

    const db = await fetch("json/home.json").then(r => r.json());

    const cards = document.querySelector(".cards");

    db.forEach(element => {
        const card = document.createElement("div");

        card.className = "card";
        card.innerHTML = `
           <div class="header">
                <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
                <span class="heading">${element.name}</span>
            </div>
            <div class="body">
                <span class="description">${element.desc}</span>
                <button onclick="${element.func}()">Open Link</button>
            </div>
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

        button.textContent = component.label;

        button.className = "item"
        button.onclick = () => {
            showComponent(component.label, component.key);
        };

        container.appendChild(button);
    });
}

const components = [
    { label: "A (Hyper Text Link)", key: "a" },
    { label: "All", key: "all" },
    { label: "App Drawer", key: "app-drawer" },
    { label: "Body", key: "body" },
    { label: "Button", key: "button" },
    { label: "Cards", key: "cards" },
    { label: "Context Menu", key: "context-menu" },
    { label: "Copy Box", key: "copy-box" },
    { label: "Details Panel", key: "details-panel" },
    { label: "Footer", key: "footer" },
    { label: "Form", key: "form" },
    { label: "Grouped List", key: "grouped-list" },
    { label: "Header", key: "header" },
    { label: "Headings", key: "headings" },
    { label: "Img", key: "img" },
    { label: "Lists", key: "lists" },
    { label: "Main", key: "main" },
    { label: "Menu Bar", key: "menu-bar" },
    { label: "P (paragraph)", key: "p" },
    { label: "Payment Terminal", key: "payment-terminal" },
    { label: "Section", key: "section" },
    { label: "Services Icons", key: "services-icons" },
    { label: "Table", key: "table" },
    { label: "Tabs Switching", key: "tabs-switching" },
    { label: "Timeline", key: "timeline" },
    { label: "Train Formation", key: "train-formation" }
];

async function showComponent(nameUpperCase, nameLowerCase) {
    scrollUp();
    setTitle(`${nameUpperCase} - Nether Web UI`)
    setContentOfMain(`
        <h1>${nameUpperCase}</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('css', this)" data-tab="css">
                        <img src="img/brands/css-logo.png" alt="CSS3 Logo">
                        CSS
                    </button>
                    <button class="tab" onclick="showTab('js', this)" data-tab="js">
                        <img src="img/brands/js-logo.png" alt="JS Logo">
                        JS
                    </button>
                    <button class="tab" onclick="showTab('html', this)" data-tab="html">
                        <img src="img/brands/html-logo.png" alt="HTML5 Logo">
                        HTML (Example)
                    </button>
                </div>

                <div class="tab-content active" id="css">
                    <h2>CSS</h2>
                    <ul>
                        <li>Use one of the following methods to import the CSS file</li>
                        <li>Do not use both of them</li>
                    </ul>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">CSS</span>
                        </div>
                        <div class="body">
                            <pre class="code css">@import url("https://web-ui.nether.click/components/css/${nameLowerCase}.css");</pre>
                        </div>
                    </div>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre
                                class="code html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://web-ui.nether.click/components/css/${nameLowerCase}.css&quot;&gt;</pre>
                        </div>
                    </div>
                    <br>
                    <p>Or copy the CSS code</p>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">CSS</span>
                        </div>
                        <div class="body">
                            <pre class="code css" id="css"></pre>
                        </div>
                    </div>
                    <br>
                    <button>
                        <a href="https://web-ui.nether.click/components/css/${nameLowerCase}.css" download>Download File</a>
                    </button>
                </div>
                <div class="tab-content" id="js">
                    <h2>JS</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre class="code html">&lt;script src&quot;https://web-ui.nether.click/components/js/${nameLowerCase}.js&quot;&gt;</pre>
                        </div>
                    </div>
                    <br>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">JS</span>
                        </div>
                        <div class="body">
                            <pre class="code js" id="js"></pre>
                        </div>
                    </div>
                    <br>
                    <button><a href="https://web-ui.nether.click/components/css/${nameLowerCase}.css" download>Download File</a></button>
                </div>
                <div class="tab-content" id="html">
                    <h2>HTML (Example)</h2>
                    <div class="copy-box">
                        <div class="head">
                            <span class="language">HTML</span>
                        </div>
                        <div class="body">
                            <pre class="code html" type="text" id="html"></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `)

    await fetch(`components/css/${nameLowerCase}.css`)
        .then(response => {
            if (!response.ok) return `fetching "${nameLowerCase}" failed`;
            return response.text();
        })
        .then(data => {
            document.querySelector(".code#css").textContent = data;
        });

    await fetch(`components/js/${nameLowerCase}.js`)
        .then(response => {
            if (!response.ok) return `fetching "${nameLowerCase}" failed`;
            return response.text();
        })
        .then(data => {
            document.querySelector(".code#js").textContent = data;
        });

    await fetch(`components/md/${nameLowerCase}.md`)
        .then(response => {
            if (response.ok) return response.text();

            return fetch(`components/html/${nameLowerCase}.html`)
                .then(response => {
                    if (!response.ok) return "fetching markdown and html failed";
                    return response.text();
                });
        })
        .then(data => {
            document.querySelector(".code#html").textContent = data;
        });
}

function showAbout() {
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
                    <div class="timeline">
                        <div class="event">
                            <span class="marker"></span>
                            <span class="date">May 2026</span>
                            <span class="content">Founded</span>
                        </div>
                        <div class="event">
                            <span class="marker"></span>
                            <span class="date">May 2026</span>
                            <span class="content">Joined nether ecosystem and changed from CSS Reset to Nether Modern web</span>
                        </div>
                        <div class="event">
                            <span class="marker"></span>
                            <span class="date">July 2026</span>
                            <span class="content">Changed from Nether Modern web to Nether Web UI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `)
}

showHome();