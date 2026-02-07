const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hint = document.getElementById("hint");

let noClicks = 0;
const maxNoClicks = 5;

// Starting scale factors
let yesScale = 1;
let noScale = 1;

function applyScales() {
  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;
}

function setHint(text) {
  if (!hint) return;
  hint.textContent = text;
}

yesBtn.addEventListener("click", () => {
  // Go to the letter page
  window.location.href = "yes.html";
});

noBtn.addEventListener("click", () => {
  noClicks += 1;

  // Each "No" makes Yes bigger and No smaller
  yesScale += 0.18;
  noScale -= 0.16;

  // Keep No from going negative scale while still visible
  noScale = Math.max(noScale, 0.1);

  applyScales();

  if (noClicks < maxNoClicks) {
    const left = maxNoClicks - noClicks;
    setHint(`Hmm… try again 😌 (${left} left)`);
  } else {
    // After 5 clicks: hide No
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    noBtn.style.transform = "scale(0.01)";
    setHint("Only one option left 💘");
  }
});

// Initial
applyScales();
setHint("");
