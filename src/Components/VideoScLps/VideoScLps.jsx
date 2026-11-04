import "./VideoScLps.css";

const VideoScLps = () => {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Supercamp UTBK SNBT 2026 – Program Karantina Intensif Masuk Kedokteran & PTN Favorit",
    description:
      "Video profil Program Supercamp Bimbel LPS untuk persiapan UTBK SNBT 2026 dan seleksi masuk Fakultas Kedokteran serta PTN favorit seperti UI, UGM, ITB, dan Unair. Program karantina intensif dengan master teacher berpengalaman.",
    thumbnailUrl: ["https://img.youtube.com/vi/E5FVSivR8-o/maxresdefault.jpg"],
    uploadDate: "2024-01-01T08:00:00+07:00",
    duration: "PT3M01S",
    contentUrl: "https://www.youtube.com/watch?v=E5FVSivR8-o",
    embedUrl: "https://www.youtube-nocookie.com/embed/E5FVSivR8-o",
    publisher: {
      "@type": "Organization",
      name: "Bimbel LPS",
      logo: {
        "@type": "ImageObject",
        url: "https://supercampmatrix.co.id/images/LOGO2.webp",
      },
    },
  };

  return (
    <section className="parent-box-video-sc-lps">
      <script type="application/ld+json">{JSON.stringify(videoData)}</script>

      <h2 className="title-video-sc-lps">
        Video Profil Supercamp UTBK SNBT 2026
      </h2>

      <p className="desk-video-sc-lps">
        Tonton sekilas program karantina belajar Supercamp untuk persiapan UTBK
        SNBT dan masuk Fakultas Kedokteran di PTN favorit.
      </p>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube-nocookie.com/embed/E5FVSivR8-o"
          title="Video Supercamp UTBK SNBT 2026 Bimbel LPS"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default VideoScLps;
