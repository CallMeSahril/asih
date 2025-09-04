// src/view.js

const Nav = (brand, items) => `
<header id="topbar" class="fixed inset-x-0 top-0 z-50 transition-all">
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <img src="${brand.logo}" alt="${
  brand.name
}" class="h-10 w-10 rounded-full ring-2 ring-white/50">
        <div class="leading-tight">
          <p class="font-extrabold tracking-tight text-slate-900">${
            brand.name
          }</p>
          <p class="text-xs text-slate-500">${brand.tagline}</p>
        </div>
      </a>
      <div class="hidden md:flex items-center gap-8">
        ${items
          .map((i) =>
            i.type === "cta"
              ? `<a href="${i.href}" class="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">${i.label}</a>`
              : `<a href="${i.href}" class="hover:text-brand-600">${i.label}</a>`
          )
          .join("")}
      </div>
      <button id="btnMobile" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </nav>
  <div id="mobileMenu" class="hidden md:hidden bg-white/95 nav-blur border-t">
    <div class="mx-auto max-w-7xl px-4 py-3 space-y-2">
      ${items
        .map(
          (i) =>
            `<a href="${i.href}" class="block py-2 ${
              i.type === "cta" ? "text-brand-700 font-semibold" : ""
            }">${i.label}</a>`
        )
        .join("")}
    </div>
  </div>
</header>
`;

const Hero = (hero) => `
<section class="relative isolate">
  <div class="h-[72vh] min-h-[460px] w-full bg-center bg-cover" style="background-image:url('${hero.bg}')"></div>
  <div class="absolute inset-0 bg-slate-900/60"></div>
  <div class="absolute inset-0 flex items-center">
    <div class="mx-auto max-w-5xl px-6 text-center text-white">
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight">${hero.title}</h1>
      <p class="mt-4 text-lg text-white/90">${hero.subtitle}</p>
      <div class="mt-8 flex items-center justify-center gap-3">
        <a href="${hero.primary.href}" class="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100 shadow-soft">${hero.primary.label}</a>
        <a href="${hero.secondary.href}" class="rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700 shadow-soft">${hero.secondary.label}</a>
      </div>
    </div>
  </div>
  <div class="absolute -bottom-6 left-0 right-0">
    <svg class="w-full" height="48" viewBox="0 0 1440 48" preserveAspectRatio="none">
      <path d="M0,48 C160,16 320,16 480,32 C640,48 800,48 960,32 C1120,16 1280,16 1440,48 L1440,0 L0,0 Z" fill="#ffffff"/>
    </svg>
  </div>
</section>
`;

const Highlight = (items) => `
<section id="highlight" class="py-6 bg-white">
  <div id="highlightCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
    <div class="carousel-indicators">
      ${items
        .map(
          (_, i) => `
        <button type="button" data-bs-target="#highlightCarousel" data-bs-slide-to="${i}" class="${
            i === 0 ? "active" : ""
          }" aria-label="Slide ${i + 1}" ${
            i === 0 ? 'aria-current="true"' : ""
          }></button>
      `
        )
        .join("")}
    </div>
    <div class="carousel-inner">
      ${items
        .map(
          (s, i) => `
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="highlight-slide d-flex align-items-center" style="--bg:url('${
            s.bg
          }');">
            <div class="container">
              <div class="row ${
                s.side === "right"
                  ? "justify-content-end"
                  : "justify-content-start"
              } justify-content-center">
                <div class="col-lg-7">
                  <div class="content-card p-4 p-md-5">
                    <span class="badge text-bg-danger mb-2">${s.badge}</span>
                    <h3 class="display-6 fw-extrabold mb-3" style="letter-spacing:-.02em;">${
                      s.title
                    }</h3>
                    <p class="lead mb-4">${s.text}</p>
                    ${
                      s.chips?.length
                        ? `<div class="d-flex flex-wrap gap-2 mb-3">${s.chips
                            .map(
                              (c) =>
                                `<span class="badge rounded-pill text-bg-light">${c}</span>`
                            )
                            .join("")}</div>`
                        : ""
                    }
                    <a href="${s.button.href}" class="btn btn-danger btn-lg">${
            s.button.label
          }</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
        )
        .join("")}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#highlightCarousel" data-bs-slide="prev" aria-label="Prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#highlightCarousel" data-bs-slide="next" aria-label="Next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</section>
`;

const Pengenalan = (p) => `
<section id="pengenalan" class="py-16">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-bold tracking-tight mb-4">${p.title}</h2>
        <p class="leading-relaxed text-slate-700">${p.text}</p>
      </div>
      <div class="relative">
        <img src="${p.image}" alt="Aktivitas Yayasan" class="rounded-2xl shadow-soft">
        <img src="assets/logo-asih.png" alt="Logo" class="absolute -right-4 -bottom-4 h-16 w-16 rounded-full ring-4 ring-white shadow-lg bg-white p-1">
      </div>
    </div>
  </div>
</section>
`;

const VisiMisi = (vm) => `
<section id="visi" class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-6">
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-2xl font-bold mb-3">Visi</h3>
        <p>${vm.visi}</p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-3">Misi</h3>
        <ul class="grid gap-2">
          ${vm.misi
            .map(
              (m) =>
                `<li class="flex gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-brand-600"></span>${m}</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  </div>
</section>
`;

const Tujuan = (items) => `
<section id="tujuan" class="py-16">
  <div class="mx-auto max-w-7xl px-6">
    <h3 class="text-3xl font-bold text-center mb-10">Tujuan</h3>
    <div class="grid gap-6 md:grid-cols-3">
      ${items
        .map(
          (t) => `
        <div class="rounded-2xl bg-white p-6 shadow-soft">
          <h4 class="font-semibold mb-1">${t.title}</h4>
          <p class="text-slate-600">${t.text}</p>
        </div>`
        )
        .join("")}
    </div>
  </div>
</section>
`;

const Kegiatan = (k) => `
<section id="kegiatan" class="bg-slate-50 py-16">
  <div class="mx-auto max-w-7xl px-6">
    <h3 class="text-3xl font-bold text-center mb-10">Rangkaian Kegiatan</h3>
    <div class="grid gap-6 md:grid-cols-3">
      ${k.kolom3
        .map(
          (col) => `
        <div class="rounded-2xl bg-white p-6 shadow-soft">
          <h5 class="font-semibold text-lg">${col.title}</h5>
          <ul class="mt-2 list-disc list-inside text-slate-600">
            ${col.items.map((i) => `<li>${i}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
    </div>
    <div class="mt-6 grid gap-6 md:grid-cols-2">
      ${k.kolom2
        .map(
          (col) => `
        <div class="rounded-2xl bg-white p-6 shadow-soft">
          <h5 class="font-semibold text-lg">${col.title}</h5>
          <ul class="mt-2 list-disc list-inside text-slate-600">
            ${col.items.map((i) => `<li>${i}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
    </div>
  </div>
</section>
`;

const Pendiri = (founders) => `
<section id="pendiri" class="py-16">
  <div class="mx-auto max-w-7xl px-6">
    <div class="text-center mb-10">
      <h3 class="text-3xl font-bold">Para Pendiri</h3>
      <p class="mt-2 text-slate-600">Tokoh di balik Yayasan ASIH yang menggerakkan kolaborasi sosial, hukum, dan gizi.</p>
      <a href="struktur.html" class="inline-flex items-center gap-2 mt-4 rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700 shadow-soft">
        <i class="bi bi-diagram-3"></i> Lihat Struktur Organisasi
      </a>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      ${founders
        .map(
          (f) => `
        <article class="rounded-2xl bg-white p-6 shadow-soft border hover:shadow-lg transition">
          <div class="flex flex-col items-center text-center">
            <img src="${f.photo}" alt="${f.name}" class="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow">
            <h4 class="mt-4 text-xl font-semibold">${f.name}</h4>
            <p class="text-brand-700 font-medium">${f.role}</p>
          </div>
        </article>`
        )
        .join("")}
    </div>
  </div>
</section>
`;

const Kontak = () => `
<section id="kontak" class="bg-slate-50 py-16">
  <div class="mx-auto max-w-4xl px-6 text-center">
    <h3 class="text-3xl font-bold">Mari Berkolaborasi</h3>
    <p class="mt-3 text-slate-600">Bergabung sebagai relawan, mitra, atau donatur untuk memperluas dampak program Yayasan ASIH.</p>
    <form class="mt-6 grid gap-3 sm:grid-cols-3">
      <input type="text" placeholder="Nama" class="col-span-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500">
      <input type="email" placeholder="Email" class="col-span-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand-500">
      <button class="col-span-1 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">Kirim</button>
    </form>
  </div>
</section>
`;

const Footer = (brand, socials, text) => `
<footer class="border-t bg-white">
  <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-3">
      <img src="${brand.logo}" class="h-8 w-8 rounded-full" alt="Logo">
      <span class="text-sm text-slate-600">${text}</span>
    </div>
    <div class="d-none d-md-flex align-items-center gap-2">
      <a href="#" class="text-muted small text-decoration-none">Kebijakan Privasi</a>
      <span class="text-muted">•</span>
      <a href="#" class="text-muted small text-decoration-none">Syarat & Ketentuan</a>
    </div>
  </div>
  <div class="social-sidebar" aria-label="Ikon media sosial">
    ${socials
      .map(
        (s) => `
      <a href="${s.href}" class="${
          s.class
        }" target="_blank" rel="noopener" data-bs-toggle="tooltip" data-bs-title="${
          s.icon[0].toUpperCase() + s.icon.slice(1)
        }" aria-label="${s.icon}">
        <i class="bi bi-${s.icon} fs-5"></i>
      </a>`
      )
      .join("")}
  </div>
</footer>
`;

export function render(state) {
  const root = document.getElementById("app");
  root.innerHTML = `
    ${Nav(state.brand, state.navbar)}
    ${Hero(state.hero)}
    ${Highlight(state.highlights)}
    ${Pengenalan(state.pengenalan)}
    ${VisiMisi(state.visiMisi)}
    ${Tujuan(state.tujuan)}
    ${Kegiatan(state.kegiatan)}
    ${Pendiri(state.founders)}
    ${Kontak()}
    ${Footer(state.brand, state.socials, state.footer.text)}
  `;
}
