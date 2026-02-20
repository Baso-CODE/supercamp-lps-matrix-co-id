import cta_1_mob from "../../assets/new/bimbel_privat_supercamp_kedokteran.webp";
import cta_1 from "../../assets/new/cta_les_privat_masuk_ptn.webp";
import "./SlideCtaLps.css";

const SlideCtaLps = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=6282258689993&text=Kak%20Nia%2C%20saya%20ingin%20tahu%20mengenai%20Program%20Supercamp%2C%20Matrix.%20Bagaimana%20penjelasan%20detail%20programnya%3F";

  return (
    <section className="box-bg-slide-cta">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-link">
        {/* Gambar Desktop */}
        <img
          className="cta-img desktop-only"
          src={cta_1}
          alt="Program Bimbel - Les Privat UTBK SNBT Kedokteran"
        />
        {/* Gambar Mobile */}
        <img
          className="cta-img mobile-only"
          src={cta_1_mob}
          alt="Program Bimbel - Les Privat UTBK SNBT Kedokteran"
        />
      </a>
    </section>
  );
};

export default SlideCtaLps;
