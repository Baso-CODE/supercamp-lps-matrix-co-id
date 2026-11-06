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
import ListKelHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKelHalamanKedokteran";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";
import { DOMAIN } from "../../utils/domain";
import formatNamaWilayah from "../../utils/formatNamaWilayah";

const HalamanKecKedokteran = () => {
  // =========================================
  // PARAMETER KECAMATAN
  // =========================================
  const { kecSlug } = useParams();

  // =========================================
  // NORMALISASI SLUG
  // =========================================
  const slugKecamatan = String(kecSlug || "")
    .trim()
    .toLowerCase();

  // =========================================
  // FORMAT NAMA KECAMATAN
  // =========================================
  const namaKecamatan = formatNamaWilayah(slugKecamatan);

  // =========================================
  // CANONICAL URL
  // =========================================
  const canonicalUrl = `${DOMAIN}/bimbel-les-privat-masuk-kedokteran/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Les Privat Kedokteran ${namaKecamatan} | Bimbel Masuk FK`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Les privat masuk Kedokteran di ${namaKecamatan}. Persiapan FK UI, UGM, UNAIR, dan UNDIP melalui latihan UTBK SNBT, tryout, serta evaluasi belajar.`;

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
      name: "Les Privat Persiapan Masuk Fakultas Kedokteran",
      description:
        "Program bimbingan privat untuk persiapan seleksi Fakultas Kedokteran melalui penguatan kemampuan akademik, latihan UTBK SNBT, strategi pengerjaan soal, dan evaluasi perkembangan belajar.",
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
          content={`Program les privat masuk Fakultas Kedokteran di ${namaKecamatan}`}
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
        {/* JSON-LD */}
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
          Les Privat Masuk Kedokteran di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Bimbingan
          Intensif Persiapan Fakultas Kedokteran
        </h1>

        <p className="desk-seo-lps">
          Persiapan masuk Fakultas Kedokteran membutuhkan strategi belajar yang
          mempertimbangkan kemampuan akademik, target perguruan tinggi, dan
          jalur penerimaan yang dipilih. Bagi siswa di {namaKecamatan}, program{" "}
          <strong>Les Privat Masuk Kedokteran</strong> dari Supercamp Matrix
          Indonesia membantu calon mahasiswa mempersiapkan diri melalui
          pendampingan belajar intensif, latihan soal, dan evaluasi kemampuan
          secara terarah.
          <br />
          <br />
          Untuk menghadapi seleksi melalui jalur UTBK SNBT, peserta perlu
          memperkuat kemampuan penalaran, literasi, serta pengetahuan
          kuantitatif sesuai ketentuan ujian yang berlaku. Melalui pembahasan
          soal bersama tutor, siswa dapat mengembangkan kemampuan memahami
          masalah, menentukan langkah penyelesaian, dan meningkatkan ketelitian
          ketika mengerjakan soal.
          <br />
          <br />
          Salah satu tantangan dalam persiapan masuk Kedokteran adalah mengelola
          waktu belajar secara efektif. Calon mahasiswa yang menargetkan FK UI,
          FK UGM, FK UNAIR, atau FK UNDIP perlu mempertimbangkan persyaratan
          seleksi, daya tampung, dan karakteristik jalur penerimaan pada
          masing-masing perguruan tinggi. Dengan memahami target sejak awal,
          siswa di {namaKecamatan}
          dapat menyusun prioritas latihan yang lebih sesuai dengan kebutuhan
          akademik.
          <br />
          <br />
          Selain pendalaman materi, simulasi ujian atau tryout menjadi bagian
          penting dalam proses evaluasi. Hasil latihan membantu peserta
          mengidentifikasi materi yang belum dikuasai, mengenali kesalahan yang
          sering terjadi, dan melatih manajemen waktu ketika menghadapi soal
          dengan batas waktu tertentu.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat Kedokteran</strong>, calon
          mahasiswa dapat mengembangkan kebiasaan belajar yang lebih konsisten,
          memperkuat kesiapan akademik, serta mengevaluasi perkembangan
          kemampuan berdasarkan hasil latihan. Pendampingan yang terstruktur
          membantu siswa mempersiapkan diri menghadapi persaingan seleksi
          Fakultas Kedokteran sesuai dengan target dan kemampuan masing-masing.
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
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKelHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecKedokteran;
