// main.js (MVC-ish: small Model, View helpers, and Controller wiring)

// ===== Model =====
function buildTable(n) {
  let html = `<h3>Table of ${n}</h3>`;
  for (let i = 1; i <= 10; i++) html += `<p>${n} × ${i} = ${n * i}</p>`;
  return html;
}

// ===== View =====
function setReloadId() {
  const el = document.getElementById("reload");
  if (!el) return;
  const id = Math.floor(Math.random() * 10000);
  el.textContent = `Reload ID: ${id}`;
}

// ===== Controller =====
function wireIndex() {
  const btn = document.getElementById("continue");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.location.href = "app.html";
  });
}

function wireApp() {
  const showBtn = document.getElementById("show");
  const toggleBtn = document.getElementById("toggle");
  const backBtn = document.getElementById("back");
  const info = document.getElementById("info");
  const result = document.getElementById("result");

  if (showBtn) {
    showBtn.addEventListener("click", () => {
      const n = parseInt(document.getElementById("number").value, 10);
      if (Number.isNaN(n)) return;
      result.innerHTML = buildTable(n);
    });
  }

  if (toggleBtn && info) {
    toggleBtn.addEventListener("click", () => {
      info.hidden = !info.hidden;
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

(function init() {
  setReloadId();
  wireIndex();
  wireApp();
})();