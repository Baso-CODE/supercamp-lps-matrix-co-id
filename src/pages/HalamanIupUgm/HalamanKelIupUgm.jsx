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
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKelIupUgm = () => {
  // =========================================
  // AMBIL PARAMETER KELURAHAN
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
  const canonicalUrl = `${DOMAIN}/bimbingan-privat-iup-ugm/${encodeURIComponent(
    slugKelurahan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Guru Privat IUP UGM ${namaKelurahan} | Persiapan Seleksi`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Guru privat IUP UGM di ${namaKelurahan} untuk persiapan seleksi internasional. Pendampingan akademik, latihan bahasa Inggris, dan evaluasi belajar personal.`;

  // =========================================
  // STRUCTURED DATA
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
      name: "Guru Privat Persiapan International Undergraduate Program UGM",
      description:
        "Program pendampingan belajar individual untuk membantu calon mahasiswa mempersiapkan seleksi IUP Universitas Gadjah Mada melalui penguatan akademik, kemampuan bahasa Inggris, dan evaluasi kesiapan belajar.",
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
          content={`Pendampingan privat persiapan IUP UGM di ${namaKelurahan}`}
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
          Guru Les Privat IUP UGM di{" "}
          <span className="highlight-city">{namaKelurahan}</span> – Pendampingan
          Personal Seleksi Program Internasional
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri untuk mengikuti International Undergraduate Program
          (IUP) Universitas Gadjah Mada membutuhkan proses belajar yang
          disesuaikan dengan kemampuan akademik dan tujuan pendidikan calon
          mahasiswa. Bagi siswa di {namaKelurahan}, program{" "}
          <strong>Guru Les Privat IUP UGM</strong> dari Supercamp Matrix
          Indonesia membantu peserta mempersiapkan seleksi melalui pembelajaran
          individual yang lebih terarah.
          <br />
          <br />
          Pendampingan privat memberikan kesempatan kepada siswa untuk
          memusatkan perhatian pada materi yang belum dikuasai. Melalui
          penguatan konsep akademik, latihan pemecahan masalah, dan pembahasan
          materi bersama tutor, peserta dapat memahami bagian yang membutuhkan
          peningkatan. Proses belajar disesuaikan dengan kemampuan awal serta
          kebutuhan program studi IUP UGM yang menjadi tujuan masing-masing
          siswa.
          <br />
          <br />
          Selain kemampuan akademik, persiapan menuju program internasional juga
          perlu memperhatikan keterampilan menggunakan bahasa Inggris. Siswa di{" "}
          {namaKelurahan}
          dapat mengembangkan kemampuan membaca informasi akademik, memahami
          istilah yang relevan dengan bidang studi pilihan, serta melatih
          komunikasi secara lebih terstruktur. Apabila program studi
          mensyaratkan wawancara, persiapan dapat mencakup latihan menjelaskan
          motivasi belajar dan tujuan akademik dalam bahasa Inggris.
          <br />
          <br />
          Melalui evaluasi kemampuan secara berkala, peserta dapat mengenali
          perkembangan belajar dan menentukan prioritas materi yang perlu
          diperdalam. Bagi calon mahasiswa yang menargetkan IUP UGM,
          pendampingan privat membantu menyusun strategi belajar berdasarkan
          kebutuhan individu, waktu persiapan, dan persyaratan seleksi resmi
          yang berlaku pada program studi pilihan.
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
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelIupUgm;
