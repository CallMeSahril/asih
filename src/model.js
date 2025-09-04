// src/model.js
export const state = {
  brand: {
    name: "Yayasan ASIH",
    tagline: "Aksi Solidaritas Indonesia Hebat",
    logo: "assets/logo-asih.png",
  },

  navbar: [
    { label: "Pengenalan", href: "#pengenalan" },
    { label: "Visi & Misi", href: "#visi" },
    { label: "Tujuan", href: "#tujuan" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "Pendiri", href: "#pendiri" },
    { label: "Donasi", href: "#kontak", type: "cta" },
  ],

  hero: {
    bg: "assets/hero.jpg",
    title: "Bersama Mewujudkan Masyarakat Adil, Makmur, & Berakhlak",
    subtitle:
      "Mendorong solidaritas, pendidikan, dan keadilan melalui program yang terstruktur & berkelanjutan.",
    primary: { label: "Lihat Program", href: "#visi" },
    secondary: { label: "Dukung Kami", href: "#kontak" },
  },

  highlights: [
    {
      side: "left",
      bg: "assets/slide-law.jpg",
      badge: "Highlight",
      title: "Pusat Bantuan Hukum ASIH",
      text: `Menyediakan layanan konsultasi hukum <b>gratis</b> bagi masyarakat yang menghadapi masalah hukum, khususnya kasus <b>perdata</b> dan <b>pidana ringan</b>.`,
      chips: ["Konsultasi Gratis", "Edukasi Hak Sipil", "Pendampingan Awal"],
      button: { label: "Konsultasi Gratis", href: "#kontak" },
    },
    {
      side: "right",
      bg: "assets/slide-nutrition.jpg",
      badge: "Highlight",
      title: "Badan Gizi Nasional",
      text: "Inisiatif peningkatan status gizi melalui edukasi gizi seimbang, skrining balita & ibu hamil, serta dukungan bahan pangan bergizi.",
      chips: ["Edukasi Gizi", "Skrining Balita", "Dukungan Pangan"],
      button: { label: "Dukung Program", href: "#kontak" },
    },
  ],

  pengenalan: {
    title: "Yayasan ASIH",
    text: `Dibentuk sebagai respon terhadap kebutuhan nyata masyarakat, Yayasan ASIH menjembatani kesenjangan akses pendidikan, layanan sosial-kesehatan, dan keadilan; berfokus pada pembangunan holistik sosial, spiritual, dan intelektual.`,
    image: "assets/hero.jpg",
  },

  visiMisi: {
    visi: "Menjadi katalisator terwujudnya masyarakat Indonesia yang adil, makmur, berakhlak, dan berpendidikan tinggi, menjunjung nilai solidaritas & kemanusiaan.",
    misi: [
      "Pemberdayaan Sosial.",
      "Pembinaan Keagamaan & Spiritual.",
      "Penegakan Keadilan (bantuan hukum & advokasi).",
      "Peningkatan Kapasitas Pendidikan.",
    ],
  },

  tujuan: [
    {
      title: "Jangka Pendek (1–3 Tahun)",
      text: "Tiga program percontohan sosial, pendidikan, hukum di satu wilayah sasaran.",
    },
    {
      title: "Jangka Menengah (3–5 Tahun)",
      text: "Ekspansi ke 5 wilayah & kemitraan strategis dengan ≥10 lembaga/perusahaan.",
    },
    {
      title: "Jangka Panjang (5–10 Tahun)",
      text: "Menjadi rujukan nasional & mendirikan pusat riset/pengembangan mandiri.",
    },
  ],

  kegiatan: {
    kolom3: [
      {
        title: "Sosial & Kemanusiaan",
        items: [
          "Program “Sehati Peduli”",
          "Bank Sampah Komunitas",
          "Donor Darah Rutin",
        ],
      },
      {
        title: "Keagamaan & Spiritual",
        items: [
          "Majelis Ilmu “Cahaya Hati”",
          "Santunan Yatim & Dhuafa",
          "Gerakan “Jumat Berkah”",
        ],
      },
      {
        title: "Pusat Bantuan Hukum",
        items: [
          "Konsultasi Hukum Gratis",
          "Edukasi Hak Sipil",
          "Pendampingan Pro Bono",
        ],
      },
    ],
    kolom2: [
      {
        title: "Pendidikan",
        items: [
          "Beasiswa “Cerdas Berani”",
          "Kelas Literasi & Vokasi",
          "“Satu Buku Satu Harapan”",
        ],
      },
      {
        title: "Lain-lain",
        items: [
          "Lingkungan “Hijau Negeriku”",
          "Pameran Produk Lokal",
          "Forum Diskusi Publik",
        ],
      },
    ],
  },

  founders: [
    { name: "Nurudin, SE.,MM", role: "Pendiri", photo: "assets/founder-1.jpg" },
    { name: "Ahmad Sidik, ST", role: "Pendiri", photo: "assets/founder-2.jpg" },
    {
      name: "Wandoyo. S.H.,M.H",
      role: "Pendiri",
      photo: "assets/founder-3.jpg",
    },
  ],

  socials: [
    { icon: "facebook", class: "bg-facebook", href: "#" },
    { icon: "instagram", class: "bg-instagram", href: "#" },
    { icon: "youtube", class: "bg-youtube", href: "#" },
    { icon: "tiktok", class: "bg-tiktok", href: "#" },
  ],

  footer: {
    text: "© 2025 Yayasan ASIH. All rights reserved.",
  },
};
