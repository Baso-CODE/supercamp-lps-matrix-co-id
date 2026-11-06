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
import ListKecHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKecHalamanSimakUi";
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

const HalamanKabSimakUi = () => {
  // =========================================
  // PARAMETER KABUPATEN
  // =========================================
  const { id } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKabupaten = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KABUPATEN
  // =========================================
  const namaKabupaten = formatNamaWilayah(slugKabupaten);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-privat-simak-ui/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel SIMAK UI ${namaKabupaten} | Les Privat Masuk UI`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel SIMAK UI di ${namaKabupaten} dengan les privat intensif. Persiapan seleksi UI, latihan soal, tryout, evaluasi belajar, dan konsultasi jurusan.`;

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
      name: "Bimbingan Persiapan Seleksi Masuk Universitas Indonesia",
      description:
        "Program bimbingan belajar dan les privat untuk persiapan seleksi masuk Universitas Indonesia melalui SIMAK UI, mencakup latihan soal, pembahasan materi, evaluasi akademik, dan perencanaan pilihan program studi.",
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
          content={`Program bimbel persiapan SIMAK UI untuk siswa di ${namaKabupaten}`}
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
          Bimbel & Les Privat SIMAK UI di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          Intensif Seleksi Masuk Universitas Indonesia
        </h1>

        <p className="desk-seo-lps">
          Universitas Indonesia merupakan salah satu perguruan tinggi negeri
          yang menjadi tujuan banyak calon mahasiswa. Untuk mempersiapkan diri
          menghadapi seleksi masuk UI, peserta perlu memahami jalur penerimaan,
          persyaratan program studi, serta kemampuan akademik yang akan
          diujikan. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Bimbel & Les Privat SIMAK UI</strong> dari Supercamp Matrix
          Indonesia membantu calon mahasiswa mempersiapkan proses seleksi
          melalui bimbingan akademik, latihan soal, dan evaluasi perkembangan
          belajar.
          <br />
          <br />
          Salah satu jalur penerimaan yang dapat dipertimbangkan adalah Seleksi
          Masuk Universitas Indonesia atau SIMAK UI. Peserta perlu memperhatikan
          ketentuan seleksi yang berlaku pada tahun penerimaan, termasuk
          persyaratan pendaftaran, pilihan program studi, serta bentuk ujian.
          Dengan memahami informasi resmi sejak awal, siswa dapat menentukan
          strategi belajar yang sesuai dengan jalur penerimaan yang menjadi
          target.
          <br />
          <br />
          Selain program sarjana reguler, Universitas Indonesia juga memiliki
          pilihan program Kelas Khusus Internasional (KKI). Calon mahasiswa yang
          mempertimbangkan program internasional perlu memperhatikan persyaratan
          akademik, kemampuan bahasa, dan mekanisme seleksi sesuai ketentuan
          program studi tujuan. Persiapan untuk jalur tersebut perlu disesuaikan
          dengan persyaratan resmi, karena bentuk seleksi dapat berbeda
          antarprogram.
          <br />
          <br />
          Melalui program <strong>Les Privat Persiapan SIMAK UI</strong>, siswa
          di {namaKabupaten}
          dapat memperkuat pemahaman materi yang relevan dengan ujian,
          mengembangkan strategi penyelesaian soal, dan meningkatkan ketelitian
          dalam menghadapi latihan. Simulasi ujian serta evaluasi hasil belajar
          membantu peserta mengenali materi yang masih perlu ditingkatkan
          sebelum mengikuti proses seleksi.
          <br />
          <br />
          Persiapan masuk UI juga perlu mempertimbangkan pilihan jurusan, minat
          akademik, dan kemampuan siswa. Melalui pendampingan belajar yang
          terstruktur, peserta dapat menyusun prioritas latihan, memantau
          perkembangan kemampuan, serta membangun kebiasaan belajar yang
          konsisten. Program <strong>Bimbel SIMAK UI</strong> membantu calon
          mahasiswa mempersiapkan diri secara lebih sistematis menuju proses
          seleksi Universitas Indonesia.
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
      <ListKecHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabSimakUi;
