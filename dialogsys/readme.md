You can create a modular dialog system using JavaScript, HTML, and CSS by utilizing custom attributes and handling events dynamically. Here's a clean, modular implementation:

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modular Dialog Box</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Button that triggers the dialog -->
  <button data-ui="#myDialog">Open Dialog</button>

  <!-- Another button to trigger a second dialog -->
  <button data-ui="#anotherDialog">Open Another Dialog</button>

  <!-- Dialog Box 1 -->
  <div class="dialog" data-ui="myDialog">
    <div class="dialog-content">
      <h2>Dialog 1</h2>
      <p>This is the first dialog box.</p>
      <button data-ui="#myDialog">Close</button>
    </div>
  </div>

  <!-- Dialog Box 2 -->
  <div class="dialog" data-ui="anotherDialog">
    <div class="dialog-content">
      <h2>Dialog 2</h2>
      <p>This is the second dialog box.</p>
      <button data-ui="#anotherDialog">Close</button>
    </div>
  </div>

  <script src="scripts.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
/* Basic styling for the dialog box */
.dialog {
  display: none; /* Hidden by default */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.dialog-content {
  text-align: center;
}

.dialog h2 {
  margin-top: 0;
}

/* Overlay to dim the background when dialog is active */
.dialog.active {
  display: block;
}

body.dialog-active::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
```

### JavaScript (scripts.js)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-ui]');
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetSelector = button.getAttribute('data-ui');
      
      if (targetSelector) {
        const dialog = document.querySelector(`[data-ui="${targetSelector.substring(1)}"]`);
        toggleDialog(dialog);
      }
    });
  });

  function toggleDialog(dialog) {
    if (!dialog) return;

    const isActive = dialog.classList.contains('active');

    // Close all dialogs
    const allDialogs = document.querySelectorAll('.dialog');
    allDialogs.forEach(d => d.classList.remove('active'));
    document.body.classList.remove('dialog-active');

    // If not active, show the dialog
    if (!isActive) {
      dialog.classList.add('active');
      document.body.classList.add('dialog-active');
    }
  }
});
```

### Explanation:
- **HTML**: Each dialog has a `data-ui="dialogname"` attribute. Buttons also have the `data-ui` attribute, but they point to the `id` of the dialog they should trigger (e.g., `data-ui="#myDialog"`).
- **CSS**: Dialogs are initially hidden (`display: none`) and positioned centrally on the screen. When a dialog is activated, it is made visible by adding the `active` class.
- **JavaScript**: 
  - All buttons with `data-ui` are identified.
  - When a button is clicked, it checks if there's a matching dialog with the corresponding `data-ui` attribute.
  - The `toggleDialog` function either shows or hides the dialog based on its current state. If a dialog is already open, clicking the button closes it.
  - Clicking another button will hide any open dialog and show the one associated with that button.

With this modular setup, developers only need to define new dialogs with the `data-ui` attribute and corresponding buttons to control them without having to write extra JavaScript logic.