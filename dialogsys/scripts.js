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

    const isActive = dialog.hasAttribute('open'); // for <dialog>, use the "open" attribute

    // Close all dialogs
    const allDialogs = document.querySelectorAll('dialog');
    allDialogs.forEach(d => d.close());
    document.body.classList.remove('dialog-active');
    document.body.style.overflow = ''; // Restore scrolling

    // If not active, show the dialog
    if (!isActive) {
      dialog.showModal(); // Open the dialog
      document.body.classList.add('dialog-active');
      document.body.style.overflow = 'hidden'; // Prevent page scroll
    } else {
      dialog.close(); // Close the dialog
    }
  }
});
