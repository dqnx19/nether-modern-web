## Code example

```html
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
        <a href="https://example.com">
            <img src="" alt="App 2 Icon">
            App 2
        </a>
        <a href="https://example.com">
            <img src="" alt="App 3 Icon">
            App 3
        </a>
    </div>
</div>
```

## API - Create

```javascript
nwui.appDrawer.create([
    {
        name: "App 1",
        link: "https://example.com",
        icon: "https://example.com/favicon.png"
    },
    {
        name: "App 2",
        link: "https://example.com",
        icon: "https://example.com/favicon.png"
    }
])
```

## API - Toggle

```javascript
nwui.appDrawer.toggle({ selector: ".app-drawer"})
```