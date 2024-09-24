/**
 * Opens a specified URL multiple times in new browser tabs.
 * @param {string} url - The URL to open.
 * @param {number} times - The number of times to open the URL.
 */
const openUrlMultipleTimes = (url, times) => {
    // Ensure the 'times' parameter is a positive integer
    const count = Math.max(1, Math.floor(times));
  
    // Use Array.from() to create an array of the desired length
    Array.from({ length: count }, () => window.open(url));
  };
  
  // Example usage: Open the URL "https://example.com" 10 times
  openUrlMultipleTimes('https://github.com/TimTJoe', 2);

  /**
 * Closes a specific number of open tabs.
 * @param {number} closeCount - The number of tabs to close.
 */
const closeTabs = (closeCount) => {
    // Ensure the 'closeCount' parameter is a positive integer
    const count = Math.max(1, Math.floor(closeCount));
  
    // Get all window references
    const windows = Array.from(window.opener ? [window.opener] : [window]);
  
    // Close the specified number of tabs
    for (let i = 0; i < count; i++) {
      if (i < windows.length) {
        windows[i].close();
      } else {
        console.log(`Only ${windows.length} tabs are open; could not close more.`);
        break;
      }
    }
  };
  
  // Example usage: Close 3 tabs
  closeTabs(100);
  
  