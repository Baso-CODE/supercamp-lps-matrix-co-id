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
import ListKabHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKabHalamanSimakUi";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import TutorLpsSc from "../../Components/TutorLpsSc/TutorLpsSc";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKotaSimakUi = () => {
  // =========================================
  // PARAMETER KOTA
  // =========================================
  const { id } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKota = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KOTA
  // =========================================
  const namaKota = formatNamaWilayah(slugKota);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-simak-ui/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKota} | Les Privat & Persiapan KKI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKota} dengan les privat intensif. Persiapan masuk UI dan KKI melalui latihan soal, tryout, evaluasi belajar, serta konsultasi jurusan.`;

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
      name: "Bimbel SIMAK UI dan Persiapan Kelas Internasional UI",
      description:
        "Program bimbingan belajar dan les privat untuk persiapan seleksi masuk Universitas Indonesia melalui SIMAK UI serta persiapan Kelas Khusus Internasional sesuai persyaratan program studi.",
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
          content={`Program bimbel SIMAK UI untuk siswa di ${namaKota}`}
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
          Bimbel SIMAK UI di <span className="highlight-city">{namaKota}</span>{" "}
          – Les Privat Intensif Masuk UI dan Kelas Internasional
        </h1>

        <p className="desk-seo-lps">
          Universitas Indonesia menjadi salah satu pilihan perguruan tinggi
          negeri bagi calon mahasiswa yang ingin melanjutkan pendidikan ke
          jenjang sarjana. Untuk mempersiapkan seleksi masuk UI, peserta perlu
          memahami jalur penerimaan, persyaratan program studi, dan kemampuan
          akademik yang diperlukan. Bagi siswa di {namaKota}, program{" "}
          <strong>Bimbel SIMAK UI</strong> dari Supercamp Matrix Indonesia
          membantu calon mahasiswa mempersiapkan diri melalui pembelajaran
          intensif, latihan soal, dan evaluasi hasil belajar.
          <br />
          <br />
          Salah satu jalur penerimaan yang dapat dipertimbangkan adalah Seleksi
          Masuk Universitas Indonesia atau SIMAK UI. Peserta perlu mempelajari
          persyaratan pendaftaran, bentuk seleksi, serta ketentuan program studi
          berdasarkan informasi resmi Universitas Indonesia. Dengan mengetahui
          mekanisme penerimaan sejak awal, siswa dapat menyusun prioritas
          belajar yang lebih sesuai dengan kebutuhan seleksi.
          <br />
          <br />
          Melalui program <strong>Les Privat Persiapan SIMAK UI</strong>,
          peserta dapat memperdalam materi yang relevan dengan ujian,
          mengembangkan kemampuan menyelesaikan soal, serta meningkatkan
          ketelitian dalam mengerjakan latihan. Pembelajaran bersama tutor
          membantu siswa mengenali kesalahan yang sering terjadi, memahami
          pendekatan penyelesaian soal, dan mengevaluasi perkembangan akademik
          secara berkala.
          <br />
          <br />
          Selain program sarjana reguler, Universitas Indonesia juga memiliki
          pilihan <strong>Kelas Khusus Internasional (KKI UI)</strong>
          . Calon mahasiswa yang tertarik mengikuti program internasional perlu
          memperhatikan persyaratan akademik, kemampuan bahasa, serta mekanisme
          seleksi yang ditetapkan oleh program studi tujuan. Materi persiapan
          perlu disesuaikan dengan jalur penerimaan yang dipilih karena
          ketentuannya dapat berbeda antarprogram.
          <br />
          <br />
          Bagi calon mahasiswa di {namaKota}, persiapan masuk UI juga perlu
          mencakup perencanaan pilihan jurusan, pemahaman terhadap persyaratan
          seleksi, dan pengelolaan waktu belajar. Melalui latihan terstruktur,
          simulasi ujian, serta evaluasi kemampuan, siswa dapat menentukan
          materi yang perlu ditingkatkan sebelum mengikuti proses penerimaan.
          <br />
          <br />
          Program <strong>Bimbel & Les Privat SIMAK UI</strong> membantu peserta
          membangun kebiasaan belajar yang konsisten, mengembangkan strategi
          persiapan akademik, serta memantau perkembangan kemampuan secara
          terarah. Dengan pendampingan dan evaluasi berkala, calon mahasiswa
          dapat mempersiapkan diri menghadapi seleksi masuk Universitas
          Indonesia sesuai dengan target program studi masing-masing.
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
      <VenueScLps />
      <JadwalKegiatanScLps />
      <SlideCtaLps />
      <KegiatanScLps />
      <VideoScLps />
      <TutorLpsSc />
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKabHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaSimakUi;
