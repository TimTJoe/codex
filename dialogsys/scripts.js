document.addEventListener('DOMContentLoaded', () => {
    const dialogContainer = document.body;
    const buttons = document.querySelectorAll('[data-ui]');
    const dialogs = document.querySelectorAll('.dialog');
  
    // Use event delegation instead of adding multiple event listeners
    dialogContainer.addEventListener('click', (e) => {
      const button = e.target.closest('[data-ui]');
      if (!button) return;
  
      const targetSelector = button.getAttribute('data-ui');
      if (!targetSelector) return;
  
      const dialog = document.querySelector(`[data-ui="${targetSelector.substring(1)}"]`);
      toggleDialog(dialog);
    });
  
    function toggleDialog(dialog) {
      if (!dialog) return;
  
      const isActive = dialog.classList.contains('active');
  
      // Close all dialogs efficiently
      dialogs.forEach(d => d.classList.remove('active'));
      document.body.classList.remove('dialog-active');
  
      // Only activate if it was not already open
      if (!isActive) {
        dialog.classList.add('active');
        document.body.classList.add('dialog-active');
      }
    }
  });
  
