import "./AlumniPTNLPS.css";

const AlumniPtnLps = () => {
  const alumniImages = [
    "/images/alumni/alumni-lps-1.webp",
    "/images/alumni/alumni-lps-2.webp",
    "/images/alumni/alumni-lps-3.webp",
    "/images/alumni/alumni-lps-4.webp",
    "/images/alumni/alumni-lps-5.webp",
    "/images/alumni/alumni-lps-6.webp",
  ];

  return (
    <section className="parent-box-alumni-ptn-lps">
      <h2 className="title-alumni-ptn-lps">
        Alumni Supercamp Lolos Jurusan Impian di PTN Favorit
      </h2>

      <div className="box-img-alumni-stack">
        {alumniImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Alumni Supercamp diterima di PTN favorit dan jurusan kedokteran - dokumentasi kelulusan bagian ${index + 1}`}
            className="img-alumni-full-row"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <p className="bottom-teks-alumni-ptn">
        dan masih banyak lagi siswa lainnya yang telah sukses masuk Kedokteran
        dan berbagai Perguruan Tinggi Negeri favorit melalui program Supercamp
        dan bimbel intensif UTBK SNBT.
      </p>
    </section>
  );
};

export default AlumniPtnLps;
