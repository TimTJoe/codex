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
  