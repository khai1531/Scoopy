// JavaScript to toggle feature groups
document.querySelectorAll(".feature-group-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all
    document
      .querySelectorAll(".feature-group-toggle")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".feature-list")
      .forEach((list) => list.classList.remove("active"));

    // Add active class to the clicked button and its list
    button.classList.add("active");
    button.nextElementSibling.classList.add("active");
  });
});
