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
    <div className="parent-box-alumni-ptn-lps">
      <h1 className="title-alumni-ptn-lps">
        Jurusan Impian di PTN Favorit Lainnya
      </h1>

      <div className="box-img-alumni-stack">
        {alumniImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Daftar Alumni Sukses Bagian ${index + 1}`}
            className="img-alumni-full-row"
            loading="lazy"
          />
        ))}
      </div>

      <p className="bottom-teks-alumni-ptn">
        dan masih banyak lagi siswa lainnya yang telah Sukses Masuk Kedokteran &
        PTN Favorit ...
      </p>
    </div>
  );
};

export default AlumniPtnLps;
