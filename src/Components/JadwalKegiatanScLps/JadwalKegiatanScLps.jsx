import "./JadwalKegiatanScLps.css";

const JadwalKegiatanScLps = () => {
  return (
    <section className="parent-jadwal-kegiatan-sc-lps">
      <h2 className="title-jadwal-kegiatan-sc-lps">
        Jadwal Kegiatan Supercamp UTBK SNBT 2026
      </h2>

      <p className="desk-jadwal-kegiatan">
        Berikut gambaran jadwal kegiatan harian program karantina belajar
        Supercamp untuk persiapan UTBK SNBT dan seleksi masuk Kedokteran.
        Program dilaksanakan di area dekat Universitas Indonesia (Depok) dan
        Universitas Gadjah Mada (Yogyakarta).
      </p>

      <div className="box-img-jadwal-kegiatan">
        <img
          src="/images/jadwal-belajar/senin-jumat.jpeg"
          alt="Jadwal belajar Senin sampai Jumat program karantina Supercamp persiapan UTBK SNBT"
          className="img-jadwal-kegiatan-sc-lps"
          loading="lazy"
          decoding="async"
        />

        <img
          src="/images/jadwal-belajar/sabtu.jpeg"
          alt="Jadwal kegiatan hari Sabtu Supercamp bimbel masuk PTN dan Kedokteran"
          className="img-jadwal-kegiatan-sc-lps"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default JadwalKegiatanScLps;
