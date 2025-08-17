// Age & Level progress
const birthDate = new Date("2000-10-02"); // 🎂 Change this to your real birthday
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const hasHadBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

if (!hasHadBirthday) age--;

const lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
if (!hasHadBirthday) lastBirthday.setFullYear(today.getFullYear() - 1);

const nextBirthday = new Date(lastBirthday);
nextBirthday.setFullYear(lastBirthday.getFullYear() + 1);

const progress = ((today - lastBirthday) / (nextBirthday - lastBirthday)) * 100;

document.getElementById("level-label").textContent = `Level ${age}`;
document.getElementById("level-progress").style.width = `${progress}%`;

// Modal handling
const overlay = document.getElementById("modal-overlay");
const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-modal");
    document.getElementById(targetId).style.display = "block";
    overlay.style.display = "block";
  });
});

overlay.addEventListener("click", () => {
  closeModals();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModals();
});

function closeModals() {
  modals.forEach(modal => modal.style.display = "none");
  overlay.style.display = "none";
}
