document.addEventListener("click", (e) => {
    const app_drawer = document.querySelector(".app-drawer");
    const app_drawer_button = document.querySelector(".app-drawer-button");

    if (!app_drawer || !app_drawer_button) return;

    const clickedInsideDrawer = app_drawer.contains(e.target);
    const clickedButton = app_drawer_button.contains(e.target);

    if (!clickedInsideDrawer && !clickedButton) {
        app_drawer.classList.remove("open");
    }
});

nwui.appDrawer = {
    create(options = []) {
        const element = document.createElement("div");

        element.className = "app-drawer-wrapper";
        element.innerHTML = `
            <div class="app-drawer-wrapper">
                <button onclick="nwui.appDrawer.toggle()" class="app-drawer-button">
                <div class="dots">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
            </button>
            <div class="app-drawer">
                <button onclick="nwui.appDrawer.toggle()" class="app-drawer-button"></button>
                <a href="https://example.com">
                    <img src="" alt="App 1 Icon">
                    App 1
                </a>
            </div>
        </div>
        `

        const app_drawer = document.querySelector(".app-drawer");
        

        options.forEach(app => {
            const appButton = document.createElement("a");

            appButton.href = app.link;
            appButton.innerHTML = `
                <img src="${app.icon}" alt="${app.name} icon">
                <span>${app.name}</span>
            `

            app_drawer.appendChild(appButton)
        });
    },
    
    toggle(options = {}) {
        const app_drawer = document.querySelector(options.selector);

        if (!app_drawer) {
            console.log("App drawer not found");
            return;
        }

        app_drawer.classList.toggle("open");
    }
}