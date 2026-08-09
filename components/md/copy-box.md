## Code example

```html
<div class="copy-box">
    <div class="head">
        <span class="language">${options.language}</span>
    </div>
    <div class="body">
        <div class="code">${options.code}</div>
    </div>
</div>
```

## API - Create
```javascript
nwui.copyBox.create({
    parent: "",
    id: "",
    class: "",
    language: "",
    code: ""
    render: 
});
```

you can left class, id and render blank