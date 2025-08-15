document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", event => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});