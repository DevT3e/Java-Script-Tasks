//Get  all the tab buttons
const tabButtons = document.querySelectorAll(".tab-button");

// Get all the tab contents
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listener to each tab button
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      // Get the target tab content
      const targetTab = tabButton.getAttribute("data-for-tab");
  
      // Show the target tab content and hide the other tab contents
      tabContents.forEach((tabContent) => {
        if (tabContent.getAttribute("data-tab") === targetTab) {
          tabContent.style.display = "Block";
        } else {
          tabContent.style.display = "none";
        }
      });
    });
  });