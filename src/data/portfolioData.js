// ========================================
// DATA PORTOFOLIO - EDIT SESUAI KEBUTUHAN
// ========================================

import mandiriImage from '../assets/mandiri-peduli.jpg';
import piiImage from '../assets/pii-certificate.jpg';
import unuImage from '../assets/unu-group.jpg';
import ceriaImage from '../assets/ceria-run.jpg';
import ecoImage from '../assets/eco-culturun.jpg';
import tutorImage from '../assets/tutor-certificate.jpg';
import tanakaImage from '../assets/tanaka-internship.jpg';
import tanakaProjectImage from '../assets/tanaka-project.jpg';
import portfolioProjectImage from '../assets/portfolio-project.png';

export const personalInfo = {
  name: "Umi Kungsum",
  nickname: "Dev",
  tagline: "Frontend Web Developer | Mahasiswa Informatika",
  description:
    "Mahasiswa Informatika yang passionate di bidang Frontend Web Development. Berpengalaman dalam membangun antarmuka web yang responsif dan modern. Terampil dalam koordinasi event besar dan memiliki jiwa kepemimpinan yang kuat.",
  email: "uumi03414@email.com",
  whatsapp: "+62 857 5938 0998",
  linkedin: "https://www.linkedin.com/in/umi-kungsum",
  github: "https://github.com/kungsum000",
  cvLink: "#", // Ganti dengan link Google Drive CV kamu
  location: "Gamping, Sleman, DI Yogyakarta",
};

export const aboutMe = {
  description: `Mahasiswa Informatika dengan antusiasme tinggi di bidang Frontend Web Development. Memiliki pengalaman magang sebagai Web Developer menggunakan React.js dan Tailwind CSS, serta aktif dalam manajemen event kampus. Fokus pada pengembangan antarmuka modern dan responsif.`,
  highlights: [
    "🎓 Mahasiswa Informatika Aktif",
    "💻 Pengalaman Magang Web Developer",
    "🎯 Koordinator Event Besar"
  ],
};

export const skills = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: "html5", color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: "css3", color: "#1572B6" },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "javascript",
    color: "#F7DF1E",
  },
  { name: "React.js", category: "Frontend", icon: "react", color: "#61DAFB" },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "tailwind",
    color: "#06B6D4",
  },
  // Tools & Version Control
  { name: "GitHub", category: "Tools", icon: "github", color: "#ffffff" },
  { name: "VS Code", category: "Tools", icon: "vscode", color: "#007ACC" },
];

export const experiences = [
  {
    id: 1,
    type: "internship",
    title: "Frontend Web Developer Intern",
    company: "PT. Tanaka Rizki barokah",
    period: "9 Maret 2026 – 9 Juli 2026",
    description:
      "Mengembangkan sistem manajemen berbasis web menggunakan React.js dan Tailwind CSS. Berkontribusi dalam membangun fitur-fitur UI/UX yang responsif dan terintegrasi dengan REST API.",
    image: tanakaImage,
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST API"],
    icon: "💻",
  },
  {
    id: 2,
    type: "work",
    title: "Tutor",
    company: "Provision Learning Center",
    period: "10 April 2025 - 10 April 2026",
    description: "Memberikan pendampingan akademik secara personal dan menyusun strategi pembelajaran yang efektif untuk meningkatkan pemahaman siswa. Berhasil menciptakan lingkungan belajar yang interaktif, komunikatif, dan memotivasi siswa untuk mencapai target belajar secara maksimal.",
    image: tutorImage,
    tech: ["Mentoring", "Public Speaking", "Problem Solving"],
    icon: "👨‍🏫",
  },
  {
    id: 3,
    type: "organization",
    title: "Volunteer Waste4Change — Mandiri Peduli",
    company: "Mandiri Jogja Marathon",
    period: "21 Juni 2026",
    description:
      "Terlibat dalam program pemberdayaan masyarakat dengan fokus edukasi pengelolaan sampah berkelanjutan dan menjembatani komunikasi program kepada masyarakat luas.",
    image: mandiriImage,
    tech: ["Edukasi Masyarakat", "Komunikasi", "Event Management"],
    icon: "🌱",
  },
  {
    id: 4,
    type: "organization",
    title: "Relawan Event Organizer",
    company: "Kongres Persatuan Insinyur Indonesia (Event Nasional)",
    period: "4–6 Desember 2024",
    description:
      "Membantu koordinasi teknis, registrasi, dan pelayanan peserta selama 3 hari penuh untuk mendukung kelancaran event berskala nasional.",
    image: piiImage,
    tech: ["Koordinasi Acara", "Pelayanan", "Event Nasional"],
    icon: "🤝",
  },
  {
    id: 5,
    type: "organization",
    title: "Ketua Divisi Konsumsi",
    company: "Gebyar Orientasi & Unjuk Ekspresi, UNU Yogyakarta",
    period: "23–25 September 2024",
    description:
      "Bertanggung jawab atas penyediaan konsumsi (3x sehari) dan mengatur distribusi logistik untuk ±1.000 peserta selama kegiatan berlangsung.",
    image: unuImage,
    tech: ["Manajemen Logistik", "Leadership", "Team Management"],
    icon: "🍱",
  },
  {
    id: 6,
    type: "organization",
    title: "Bagian Marshal",
    company: "EcoCulturun 2025 MM UGM",
    period: "16 November 2025",
    description:
      "Bertanggung jawab mengamankan dan mengarahkan rute lari, memberikan petunjuk arah yang jelas di setiap pos, serta memotivasi para peserta agar tetap semangat.",
    image: ecoImage,
    tech: ["Pengamanan Rute", "Motivasi", "Komunikasi"],
    icon: "🏃",
  },
  {
    id: 7,
    type: "organization",
    title: "Bagian Refreshment dan Medali",
    company: "Indonesia Ceria Run Series Bantul",
    period: "31 Agustus 2025",
    description:
      "Bertanggung jawab penuh menyiapkan dan menyerahkan Medali Finisher secara langsung. Memastikan proses penyerahan berjalan cepat, tertib, dan menyambut pelari dengan energi positif di garis akhir.",
    image: ceriaImage,
    tech: ["Pelayanan", "Kecepatan", "Komunikasi"],
    icon: "🏅",
  },
  {
    id: 8,
    type: "education",
    title: "S1 Teknik Informatika",
    company: "Universitas Nama Universitas",
    period: "2022 – Sekarang",
    description:
      "Mempelajari dasar-dasar ilmu komputer, algoritma, pemrograman web, basis data, dan pengembangan perangkat lunak. IPK: 3.91/4.0",
    tech: ["Algoritma", "Web Development", "Database", "OOP"],
    icon: "🎓",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tanaka Management System",
    description:
      "Sistem manajemen bisnis terintegrasi untuk mengelola inventaris, keuangan, marketing, dan laporan operasional. Dibangun selama program magang menggunakan teknologi modern.",
    longDescription:
      "Aplikasi web full-stack yang mencakup modul manajemen barang masuk/keluar, petty cash, pemasaran online, dan laporan keuangan. Menampilkan dashboard analitik real-time dengan visualisasi data interaktif.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MySQL", "REST API"],
    image: tanakaProjectImage,
    github: "https://github.com/kungsum000/tanaka-management",
    demo: "#",
    category: "Web App",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi yang dibangun dengan React.js, Tailwind CSS, dan Framer Motion untuk menampilkan skill, pengalaman, dan proyek-proyek terbaik.",
    longDescription:
      "Website portofolio modern dengan animasi smooth, dark mode elegan, dan desain responsif penuh. Dilengkapi dengan typing effect, scroll-reveal animations, dan form kontak interaktif.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    image: portfolioProjectImage,
    github: "https://github.com/kungsum000/portfolio",
    demo: "#",
    category: "Web App",
    featured: true,
  },
  {
    id: 3,
    title: "Desain Branding & Visual",
    description:
      "Koleksi karya desain grafis meliputi branding, poster event, media sosial, dan materi promosi untuk berbagai organisasi dan event.",
    longDescription:
      "Portofolio desain grafis yang mencakup pembuatan identitas visual brand, desain poster event skala besar, template media sosial, dan materi pemasaran digital.",
    tech: ["Adobe Illustrator", "CorelDraw", "Canva", "Photoshop"],
    image: null,
    github: "#",
    demo: "#",
    category: "Design",
    featured: false,
  },
  {
    id: 4,
    title: "Sistem Absensi Mahasiswa",
    description:
      "Aplikasi web sederhana untuk manajemen absensi mahasiswa dengan fitur QR Code, laporan kehadiran, dan dashboard admin.",
    longDescription:
      "Sistem absensi digital berbasis web yang memudahkan proses pencatatan kehadiran mahasiswa secara otomatis menggunakan QR Code scanner.",
    tech: ["React.js", "JavaScript", "Firebase", "Tailwind CSS"],
    image: null,
    github: "https://github.com/kungsum000/absensi-app",
    demo: "#",
    category: "Web App",
    featured: false,
  },
];
