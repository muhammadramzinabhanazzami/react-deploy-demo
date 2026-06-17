import React from 'react';
import './App.css';

// Silakan ganti nama di bawah ini dengan nama asli Anda
const DEVELOPER_NAME = "Muhammad Ramzi N.A."; 

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">{DEVELOPER_NAME}.</div>
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="hero-section">
        <div className="hero-content">
          <span className="badge">Informatics Engineering Student</span>
          <h1>Halo, Saya <span className="highlight">{DEVELOPER_NAME}</span></h1>
          <p className="hero-bio">
            Mahasiswa Teknik Informatika yang berbasis di Purwokerto. Berfokus pada pengembangan 
            aplikasi mobile, jaringan komputer, digital forensik, serta produksi multimedia. 
            Suka mengintegrasikan teknologi kecerdasan buatan (AI) untuk menciptakan solusi digital yang aman dan interaktif.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
            <a href="#about" className="btn btn-secondary">Kontak</a>
          </div>
        </div>
      </header>

      {/* Keahlian / Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Keahlian & Teknologi</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Pengembangan aplikasi cross-platform menggunakan Flutter dengan fokus pada animasi UI yang halus.</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🛡️</div>
            <h3>Networking & Forensics</h3>
            <p>Analisis keamanan jaringan, investigasi digital forensik, dan implementasi AI pada sistem keamanan.</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Web Development</h3>
            <p>Membangun antarmuka web modern dan responsif menggunakan React.js dan arsitektur container.</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎬</div>
            <h3>Multimedia Production</h3>
            <p>Editing foto dan video profesional untuk kebutuhan dokumentari, visual montage, dan konten digital.</p>
          </div>
        </div>
      </section>

      {/* Proyek / Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Proyek Pilihan</h2>
        <div className="projects-grid">
          
          {/* Proyek 1 */}
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">Skripsi / Riset</span>
              <h3>Network Forensics & AI Integration</h3>
              <p>Riset integrasi kecerdasan buatan untuk mendeteksi anomali serangan pada lalu lintas jaringan dan analisis bukti digital forensik.</p>
              <div className="project-tech">
                <span>Python</span><span>AI</span><span>Wireshark</span>
              </div>
            </div>
          </div>

          {/* Proyek 2 */}
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">Mobile App</span>
              <h3>Flutter Catalog Application</h3>
              <p>Aplikasi katalog produk menggunakan Flutter yang dilengkapi dengan custom animated splash screen dan manajemen aset yang terstruktur.</p>
              <div className="project-tech">
                <span>Flutter</span><span>Dart</span><span>UI/UX</span>
              </div>
            </div>
          </div>

          {/* Proyek 3 */}
          <div className="project-card">
            <div className="project-info">
              <span className="project-tag">Video Project</span>
              <h3>Purwokerto Transit Documentary</h3>
              <p>Video dokumenter berdurasi 4 menit yang membahas isu kemacetan kota Purwokerto serta solusi integrasi transportasi First-Mile & Last-Mile.</p>
              <div className="project-tech">
                <span>Premiere Pro</span><span>Storyboarding</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Semua yang ada di website ini adalah dummy data</p>
        <p>&copy; 2026 {DEVELOPER_NAME}. Dibuat dengan React JS & Dideploy via Vercel.</p>
      </footer>
    </div>
  );
}

export default App;
