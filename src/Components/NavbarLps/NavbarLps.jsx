import { Link } from "react-router-dom";
import "./NavbarLps.css";

const NavbarLps = () => {
  return (
    <header className="parent-navbar-lps">
      <nav className="navbar-lps">
        <Link to="/" className="logo-container">
          <img
            src="/images/LOGO2.webp"
            alt="Bimbel Persiapan Seleksi Simak UI CBT UGM UM PTN"
            className="logo-nav-lps"
          />
        </Link>

        <div className="parent-btn-w-quot">
          <Link to="/registrasi" className="button-daftar-sekarang-lps">
            Daftar Sekarang
          </Link>
          <span className="text-kuota-sc-lps">*Kuota Terbatas!</span>
        </div>
      </nav>
    </header>
  );
};

export default NavbarLps;
