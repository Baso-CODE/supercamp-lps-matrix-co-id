import "./VideoScLps.css";

const VideoScLps = () => {
  // Data Video untuk Schema
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Sekilas Tentang Supercamp Bimbel LPS",
    description:
      "Program Karantina Supercamp Bimbel LPS. Persiapan intensif masuk Kedokteran dan PTN Favorit (UI, UGM, ITB, Unair). Fasilitas lengkap dengan Master Teacher terbaik.",
    thumbnailUrl: ["https://img.youtube.com/vi/E5FVSivR8-o/maxresdefault.jpg"],
    uploadDate: "2024-01-01T08:00:00+07:00", // Sesuaikan jika tahu tanggal pastinya
    duration: "PT3M01S", // Contoh durasi 2 menit 30 detik, sesuaikan dengan aslinya
    contentUrl: "https://www.youtube.com/watch?v=E5FVSivR8-o",
    embedUrl: "https://www.youtube.com/embed/E5FVSivR8-o",
    publisher: {
      "@type": "Organization",
      name: "Bimbel LPS",
      logo: {
        "@type": "ImageObject",
        url: "https://supercampui.com/images/LOGO2.webp",
      },
    },
  };

  return (
    <section className="parent-box-video-sc-lps">
      <script type="application/ld+json">{JSON.stringify(videoData)}</script>

      <h2 className="title-video-sc-lps">Sekilas Tentang Supercamp</h2>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/E5FVSivR8-o?si=AkfXV50KwvNToIxS"
          title="Sekilas Tentang Supercamp Edumatrix"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default VideoScLps;
