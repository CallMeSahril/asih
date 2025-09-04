// src/controller.js
import { state } from "./model.js";
import { render } from "./view.js";

window.addEventListener("DOMContentLoaded", () => {
  // Render halaman dari data model
  render(state);

  // Efek navbar saat scroll
  const bar = document.getElementById("topbar");
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("btnMobile");

  const setBar = () => {
    if (window.scrollY > 10) {
      bar.classList.add("bg-white/90", "shadow", "nav-blur");
      bar.classList.remove("bg-transparent", "text-white");
    } else {
      bar.classList.remove("shadow", "bg-white/90");
      bar.classList.add("bg-transparent");
    }
  };
  setBar();
  window.addEventListener("scroll", setBar);

  // Toggle menu mobile
  btn?.addEventListener("click", () => menu.classList.toggle("hidden"));

  // Init tooltip Bootstrap (jika ada)
  if (window.bootstrap) {
    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((el) => new bootstrap.Tooltip(el));
  }
});
