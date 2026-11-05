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
import ListKecHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKecHalamanCbtUgm";
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

const HalamanKabCbtUgm = () => {
  // =========================================
  // AMBIL PARAMETER WILAYAH
  // =========================================
  const { id } = useParams();

  // =========================================
  // FORMAT NAMA KABUPATEN
  // =========================================
  const namaKabupaten = formatNamaWilayah(id);

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKabupaten = String(id || "")
    .trim()
    .toLowerCase();

  // =========================================
  // URL HALAMAN
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-privat-cbt-ugm/${encodeURIComponent(
    slugKabupaten,
  )}`;

  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE - KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Bimbel UM UGM CBT ${namaKabupaten} | Persiapan Ujian Mandiri`;

  // =========================================
  // META DESCRIPTION - VERSI BARU
  // =========================================
  const pageDescription = `Persiapan UM UGM CBT di ${namaKabupaten} melalui bimbingan privat, pendalaman materi, latihan tes potensi, serta simulasi ujian mandiri UGM.`;

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
      name: "Persiapan Ujian Mandiri UGM Computer Based Test",
      description:
        "Bimbingan persiapan UM UGM CBT melalui penguatan konsep akademik, latihan kemampuan dasar, tes potensi, dan simulasi ujian.",
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
          content={`Program persiapan UM UGM CBT untuk siswa di ${namaKabupaten}`}
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
        {/* STRUCTURED DATA */}
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
          Persiapan UM UGM CBT di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Bimbel
          Privat Ujian Mandiri Gadjah Mada
        </h1>

        <p className="desk-seo-lps">
          Mengikuti seleksi mandiri Universitas Gadjah Mada membutuhkan
          pemahaman terhadap karakteristik ujian serta kesiapan akademik yang
          dibangun secara bertahap. Bagi calon mahasiswa dari {namaKabupaten},
          program <strong>Bimbel UM UGM CBT</strong> dari Supercamp Matrix
          Indonesia menawarkan pendampingan belajar untuk membantu peserta
          mempersiapkan diri menghadapi jalur Ujian Mandiri UGM berbasis
          komputer.
          <br />
          <br />
          Salah satu bagian penting dalam persiapan UM UGM CBT adalah memahami
          cakupan materi ujian dan menentukan prioritas belajar. Pendampingan
          dapat diarahkan pada penguatan kemampuan dasar, pengembangan penalaran
          melalui latihan tes potensi, serta pendalaman materi akademik yang
          relevan dengan pilihan program studi. Melalui pembahasan soal dan
          simulasi ujian, siswa dapat melatih ketepatan jawaban, konsentrasi,
          dan pengelolaan waktu selama mengerjakan tes.
          <br />
          <br />
          Bagi siswa di {namaKabupaten} yang menargetkan program studi tertentu
          di UGM, strategi belajar perlu mempertimbangkan kemampuan awal, materi
          ujian yang dipersyaratkan, serta ketentuan penerimaan mahasiswa baru
          yang berlaku. Evaluasi hasil latihan membantu peserta mengenali
          kesalahan yang sering muncul sehingga waktu belajar dapat dialokasikan
          pada materi yang membutuhkan perhatian lebih besar.
          <br />
          <br />
          Melalui bimbingan privat yang terstruktur, calon mahasiswa dapat
          mempersiapkan diri secara lebih sistematis untuk menghadapi UM UGM
          CBT. Program belajar diarahkan pada penguasaan konsep, pemahaman pola
          soal, dan pembentukan kebiasaan latihan yang konsisten agar peserta
          memiliki kesiapan lebih baik saat mengikuti seleksi Universitas Gadjah
          Mada.
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
      <ListKecHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabCbtUgm;
