import "./TestimoniLps.css";

const TestimoniLps = () => {
  return (
    <section className="parent-all-testimoni-lps">
      <h2 className="title-testimoni-lps">
        Testimoni Siswa Lolos UTBK SNBT & Kedokteran
      </h2>

      <p className="desk-testimoni-lps">
        Berikut adalah pengalaman siswa Supercamp yang berhasil lolos ke PTN
        favorit dan Fakultas Kedokteran melalui program karantina intensif
        persiapan UTBK SNBT.
      </p>

      <div className="box-testimoni-sc-lps">
        <img
          src="/images/testimoni-supercamp/testimoni-muhammad-muthia-anatasya.png"
          alt="Testimoni siswa Supercamp lolos PTN favorit melalui program UTBK SNBT"
          className="img-testimoni-lps"
          loading="lazy"
          decoding="async"
          width="600"
          height="950"
        />

        <img
          src="/images/testimoni-supercamp/testimoni-rasagama-irena-amodya.png"
          alt="Testimoni alumni Supercamp berhasil masuk Kedokteran melalui karantina belajar intensif"
          className="img-testimoni-lps"
          loading="lazy"
          decoding="async"
          width="600"
          height="750"
        />
      </div>
    </section>
  );
};

export default TestimoniLps;
