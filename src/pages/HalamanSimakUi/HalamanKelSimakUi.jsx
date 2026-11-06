import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniKedokteranLps from "../../Components/AlumniKedokteranLps/AlumniKedokteranLps";
import AlumniPtnLps from "../../Components/AlumniPTNLPS/AlumniPTNLPS";
import BenefitScLps from "../../Components/BenefitScLPS/BenefitScLPS";
import BottomCtaLps from "../../Components/BottomCtaLps/BottomCtaLps";
import FaqScLps from "../../Components/FaqScLps/FaqScLps";
import FasilitasScLps from "../../Components/FasilitasScLps/FasilitasScLps";
import JadwalKegiatanScLps from "../../Components/JadwalKegiatanScLps/JadwalKegiatanScLps";
import JumbotronLps from "../../Components/Jumbotron/Jumbotron";
import KegiatanScLps from "../../Components/KegiatanScLps/KegiatanScLps";
import KerjasamaHotel from "../../Components/KerjaSamaHotel/KerjaSamaHotel";
import ListAlumni from "../../Components/ListAlumni/ListAlumni";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import TutorLpsSc from "../../Components/TutorLpsSc/TutorLpsSc";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKelSimakUi = () => {
  // =========================================
  // PARAMETER KELURAHAN
  // =========================================
  const { kelSlug } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKelurahan = String(kelSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KELURAHAN
  // =========================================
  const namaKelurahan = formatNamaWilayah(slugKelurahan);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/guru-les-privat-simak-ui/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Guru Privat SIMAK UI ${namaKelurahan} | Bimbel Masuk UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru les privat SIMAK UI di ${namaKelurahan}. Persiapan masuk Universitas Indonesia melalui latihan soal, tryout, evaluasi akademik, dan bimbingan personal.`;

  // =========================================
  // JSON-LD STRUCTURED DATA
  // =========================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: "id-ID",

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },

    isPartOf: {
      "@type": "WebSite",
      name: "Supercamp Matrix Indonesia",
      url: `${DOMAIN}/`,
    },

    about: {
      "@type": "Thing",
      name: "Guru Privat Persiapan SIMAK UI dan KKI Universitas Indonesia",
      description:
        "Program pendampingan belajar individual untuk persiapan seleksi masuk Universitas Indonesia melalui SIMAK UI, termasuk latihan soal, pembahasan materi, evaluasi kemampuan, serta persiapan seleksi KKI sesuai ketentuan program studi.",
    },
  };

  return (
    <>
      {/* ===================================== */}
      {/* SEO METADATA */}
      {/* ===================================== */}
      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="robots" content="index, follow" />

        {/* ===================================== */}
        {/* OPEN GRAPH */}
        {/* ===================================== */}
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Supercamp Matrix Indonesia" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:image" content={imageUrl} />

        <meta
          property="og:image:alt"
          content={`Program les privat SIMAK UI untuk siswa di ${namaKelurahan}`}
        />

        <meta property="og:locale" content="id_ID" />

        {/* ===================================== */}
        {/* TWITTER CARD */}
        {/* ===================================== */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />

        <meta name="twitter:image" content={imageUrl} />

        {/* ===================================== */}
        {/* JSON-LD STRUCTURED DATA */}
        {/* ===================================== */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ===================================== */}
      {/* JUMBOTRON */}
      {/* ===================================== */}
      <JumbotronLps />

      {/* ===================================== */}
      {/* SEO CONTENT */}
      {/* ===================================== */}
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Guru Les Privat SIMAK UI di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Bimbingan
          Intensif Masuk Universitas Indonesia
        </h1>

        <p className="desk-seo-lps">
          Persiapan masuk Universitas Indonesia membutuhkan strategi belajar
          yang disesuaikan dengan kemampuan akademik dan program studi tujuan.
          Bagi calon mahasiswa di {namaKelurahan}, program{" "}
          <strong>Guru Les Privat SIMAK UI</strong> dari Supercamp Matrix
          Indonesia membantu peserta mempersiapkan diri melalui pendampingan
          belajar individual, latihan soal, dan evaluasi perkembangan kemampuan.
          <br />
          <br />
          Pembelajaran privat memberikan kesempatan kepada siswa untuk
          memusatkan perhatian pada materi yang masih sulit dipahami. Dalam
          persiapan menghadapi SIMAK UI, peserta perlu memahami ketentuan
          seleksi dan materi ujian yang berlaku sesuai jalur penerimaan serta
          program studi tujuan. Melalui pembahasan bersama tutor, siswa dapat
          mengembangkan strategi penyelesaian soal, meningkatkan ketelitian,
          serta memperbaiki pemahaman akademik secara bertahap.
          <br />
          <br />
          Selain penguasaan materi, latihan dengan batas waktu dan simulasi
          ujian dapat membantu siswa membangun kesiapan menghadapi seleksi.
          Melalui tryout dan evaluasi hasil latihan, peserta dapat mengenali
          jenis soal yang masih sulit diselesaikan, memperbaiki manajemen waktu,
          serta menyusun prioritas belajar yang lebih sesuai dengan kebutuhan.
          Pendampingan individual membantu calon mahasiswa di {namaKelurahan}
          memantau perkembangan kemampuan secara berkala.
          <br />
          <br />
          Bagi calon mahasiswa yang mempertimbangkan
          <strong> Kelas Khusus Internasional (KKI) UI</strong>
          , persiapan perlu memperhatikan persyaratan akademik, kemampuan
          bahasa, serta mekanisme penerimaan yang berlaku pada program studi
          tujuan. Setiap program dapat memiliki ketentuan seleksi yang berbeda,
          sehingga siswa perlu mengacu pada informasi resmi Universitas
          Indonesia ketika menentukan strategi persiapan.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat SIMAK UI</strong>, peserta
          dapat memperkuat pemahaman akademik, membangun kebiasaan belajar yang
          konsisten, serta mengevaluasi kesiapan sebelum mengikuti proses
          seleksi. Dengan pendampingan yang disesuaikan dengan kebutuhan, calon
          mahasiswa dapat mempersiapkan diri secara lebih terarah menuju
          Universitas Indonesia.
        </p>
      </div>

      {/* ===================================== */}
      {/* KOMPONEN HALAMAN */}
      {/* ===================================== */}
      <LulusanLps />
      <AlumniKedokteranLps />
      <AlumniPtnLps />
      <BenefitScLps />
      <KerjasamaHotel />
      <TargetBelajarLps />
      <FasilitasScLps />
      <PaketSupercampLps />
      <PaketBelajarSnbtNew />
      <WaktuPelaksanaanSc />
      <JadwalKegiatanScLps />
      <SlideCtaLps />
      <KegiatanScLps />
      <VideoScLps />
      <TutorLpsSc />
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelSimakUi;
