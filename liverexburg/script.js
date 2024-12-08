// Attach event listeners for buttons and modals
document.querySelectorAll("[data-modal]").forEach((element) => {
  const modalId = element.getAttribute("data-modal");
  const modal = document.getElementById(modalId);

  // Open modal
  if (element.tagName === "BUTTON") {
    element.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  // Close modal
  if (element.classList.contains("close")) {
    element.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

// Close modals when clicking outside of them
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});
