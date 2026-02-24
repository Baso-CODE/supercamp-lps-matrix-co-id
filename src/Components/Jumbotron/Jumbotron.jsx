// Impor aset
import bgProfile from "../../assets/Supercamp/Background_supercamp_profile.webp";
import jumbotron from "../../assets/Supercamp/Jumbotron.jpg";
import mobJumbotron from "../../assets/Supercamp/MOB_JUMBOTRON.jpg";
import titleJumbotron from "../../assets/new/bimbel_utbk_snbt_2025.webp";
import "./Jumbotron.css";

const JumbotronLps = () => {
  return (
    <div className="jumbotron-container">
      {/* Optimasi Jumbotron: Browser hanya akan download salah satu */}
      <picture className="jumbotron-picture">
        <source media="(max-width: 896px)" srcSet={mobJumbotron} />
        <img
          src={jumbotron}
          alt="Program bimbel masuk PTN 2026 untuk persiapan UTBK SNBT dan Kedokteran melalui Supercamp Matrix"
          className="jumbotron-main"
          loading="eager"
          fetchpriority="high"
        />
      </picture>

      <section
        className="box-second-jumbotron"
        style={{ backgroundImage: `url(${bgProfile})` }}>
        <div className="parent-main-title-jumbotron">
          <img
            src={titleJumbotron}
            alt="Bimbel UTBK SNBT 2026 program intensif masuk Kedokteran dan PTN favorit"
            className="main-title-jumbotron"
            loading="eager"
          />

          <div className="parent-teks-top-jumbotron">
            <p className="teks-top-jumbotron">
              <strong>Bimbel Masuk PTN 2026</strong> — Persiapan Intensif Lolos
              <span className="text-highlight">
                {" "}
                Kedokteran UI, UGM, ITB, dan UNAIR
              </span>
              . Tersedia Program Khusus{" "}
              <span className="text-tag">SIMAK UI</span>,
              <span className="text-tag">CBT UGM</span>, UTBK SNBT, dan Ujian
              Mandiri PTN Favorit.
            </p>
          </div>

          <div className="parent-btn-konsul-proposal">
            <a className="btn-action btn-konsul" href="tel:082258689993">
              <span className="material-symbols-outlined">call</span>
              Konsultasi Gratis
            </a>
            <a
              className="btn-action btn-proposal"
              href="https://api.whatsapp.com/send?phone=6281311778441"
              target="_blank"
              rel="noopener noreferrer">
              <span className="material-symbols-outlined">picture_as_pdf</span>
              Request Proposal
            </a>
          </div>
        </div>

        <div className="feature-card supercamp">
          <div className="card-content">
            <h2 className="title-fill-jumbotron">SUPERCAMP MATRIX 2026</h2>
            <p className="desk-fill-jumbotron desk-short">
              Program belajar berbasis karantina khusus kedokteran dan PTN
              Favorit.
            </p>
            <p className="desk-fill-jumbotron desk-long">
              Supercamp Matrix 2026 adalah program belajar berbasis karantina
              yang dirancang khusus untuk mempercepat kemampuan siswa dalam
              memahami dan mengerjakan soal, sehingga meraih skor terbaik serta
              meningkatkan peluang lolos ke Fakultas Kedokteran dan Perguruan
              Tinggi Negeri (PTN) favorit di Indonesia.
            </p>
          </div>
        </div>

        <div className="feature-card intensive">
          <div className="card-content">
            <h2 className="title-fill-jumbotron">PRIVAT ONLINE & OFFLINE</h2>
            <p className="desk-fill-jumbotron desk-short">
              Program intensif dengan tutor berpengalaman dan waktu fleksibel.
            </p>
            <p className="desk-fill-jumbotron desk-long">
              Program Intensive Class adalah program bimbel privat untuk masuk
              Perguruan Tinggi Negeri (PTN) yang menawarkan pembelajaran
              fleksibel dan efektif. Program ini terdiri dari privat online dan
              offline dengan tutor berpengalaman, kelas kecil, bahan ajar
              lengkap, dan dukungan teknologi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JumbotronLps;
