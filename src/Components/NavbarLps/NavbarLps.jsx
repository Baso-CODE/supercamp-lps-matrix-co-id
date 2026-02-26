import { Link } from "react-router-dom";
import "./NavbarLps.css";

const NavbarLps = () => {
  return (
    <header className="parent-navbar-lps">
      <nav
        className="navbar-lps"
        aria-label="Navigasi utama website Supercamp dan Bimbel UTBK SNBT">
        <Link
          to="/"
          className="logo-container"
          aria-label="Kembali ke halaman utama Supercamp">
          <img
            src="/images/LOGO2.webp"
            alt="Logo Bimbel Persiapan Seleksi SIMAK UI CBT UGM UM PTN"
            className="logo-nav-lps"
          />
        </Link>

        <div className="parent-btn-w-quot">
          <Link
            to="/registrasi"
            className="button-daftar-sekarang-lps"
            aria-label="Daftar sekarang program Supercamp persiapan UTBK SNBT dan masuk PTN">
            Daftar Sekarang
          </Link>

          <span className="text-kuota-sc-lps" aria-live="polite">
            *Kuota Terbatas!
          </span>
        </div>
      </nav>
    </header>
  );
};

export default NavbarLps;
