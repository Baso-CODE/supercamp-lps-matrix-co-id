import iconBenefitSc from "../../assets/Supercamp/untungnya supercamp/icon_check.webp";
import "./BenefitScLPS.css";

const BenefitScLps = () => {
  return (
    <section className="benefit-supercamp-section">
      <h2 className="title-untungnya-supercamp">
        Keunggulan Program Supercamp untuk Persiapan UTBK SNBT & Kedokteran
      </h2>

      <div className="text-img-benefit-supercamp-lp">
        <ul className="parent-list-benefit-sc-lps">
          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Pendampingan akademik dan non akademik setiap hari (24 jam)
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Siswa lebih fokus dalam belajar dan terhindar dari distraksi
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Program belajar terencana dengan target nilai yang terukur
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Metode belajar personal, sistematis, dan terstruktur
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Proses belajar efektif dan efisien untuk meningkatkan peluang lolos
            PTN
          </li>

          <li className="list-benefit-sc-lps">
            <img
              src={iconBenefitSc}
              alt=""
              className="icon-untungnya-sc-lps"
              loading="lazy"
            />
            Pendekatan holistik mencakup pemahaman materi, strategi ujian,
            motivasi, dan mentalitas
          </li>
        </ul>

        <img
          src="/images/model-benefit-supercamp.webp"
          alt="Siswa program Supercamp mengikuti bimbingan belajar intensif untuk persiapan UTBK SNBT dan masuk Kedokteran"
          className="img-benefit-supercamp-lps"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default BenefitScLps;
