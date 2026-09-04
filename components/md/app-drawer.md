## API - Create

```javascript
nwui.appDrawer.create({
    parent: 
    class: 
    id:
    apps: [
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
    ]
});
```

## API - Toggle

```javascript
nwui.appDrawer.toggle({ selector: ".app-drawer"})
```