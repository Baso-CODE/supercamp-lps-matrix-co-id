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
import ListKelHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKelHalamanPtn";
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

const HalamanKecPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbingan-masuk-ptn/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk PTN ${namaKecamatan} | Les Privat & Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk PTN di ${namaKecamatan} dengan les privat intensif. Persiapan UTBK SNBT, seleksi mandiri, latihan soal, tryout, dan konsultasi jurusan.`;

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
      name: "Bimbingan Persiapan Masuk Perguruan Tinggi Negeri",
      description:
        "Program bimbingan belajar dan les privat untuk persiapan seleksi masuk PTN melalui UTBK SNBT dan jalur mandiri, termasuk latihan soal, evaluasi akademik, serta konsultasi pilihan program studi.",
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
          content={`Program bimbel masuk PTN untuk siswa di ${namaKecamatan}`}
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
          Bimbel & Les Privat Masuk PTN di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Persiapan
          SNBT, Seleksi Mandiri, dan Supercamp
        </h1>

        <p className="desk-seo-lps">
          Mempersiapkan diri untuk masuk perguruan tinggi negeri membutuhkan
          strategi yang tidak hanya berfokus pada penguasaan materi ujian,
          tetapi juga pemahaman terhadap jalur penerimaan dan pilihan program
          studi. Bagi siswa di {namaKecamatan}, program{" "}
          <strong>Bimbel & Les Privat Masuk PTN</strong> dari Supercamp Matrix
          Indonesia membantu calon mahasiswa mempersiapkan proses seleksi
          melalui pendampingan akademik yang lebih terarah.
          <br />
          <br />
          Setiap peserta dapat memiliki target perguruan tinggi dan program
          studi yang berbeda. Oleh karena itu, proses persiapan perlu
          mempertimbangkan kemampuan awal siswa, persyaratan jalur penerimaan,
          serta waktu belajar yang tersedia. Melalui pendampingan tutor, latihan
          soal, dan evaluasi hasil belajar, peserta dapat mengenali kemampuan
          yang perlu ditingkatkan sebelum menghadapi seleksi.
          <br />
          <br />
          Untuk jalur UTBK SNBT, persiapan dapat difokuskan pada penguatan
          kemampuan penalaran, literasi, pemahaman bacaan, serta pengetahuan
          kuantitatif sesuai ketentuan ujian. Sementara itu, peserta yang
          menargetkan jalur seleksi mandiri perlu menyesuaikan materi belajar
          dengan persyaratan perguruan tinggi tujuan. Latihan soal terstruktur
          dan simulasi ujian membantu siswa membangun strategi pengerjaan yang
          lebih sistematis.
          <br />
          <br />
          Selain persiapan akademik, pemilihan program studi juga menjadi bagian
          penting dalam proses penerimaan mahasiswa baru. Siswa di{" "}
          {namaKecamatan}
          yang menargetkan UI, UGM, ITB, UNAIR, UNDIP, atau perguruan tinggi
          negeri lainnya dapat mempertimbangkan minat, kemampuan akademik, daya
          tampung, serta ketentuan seleksi sebagai bagian dari penyusunan
          strategi masuk PTN.
          <br />
          <br />
          Melalui program <strong>Les Privat dan Supercamp Masuk PTN</strong>,
          peserta dapat mengembangkan kebiasaan belajar yang konsisten,
          meningkatkan pemahaman akademik, serta mengevaluasi kesiapan
          menghadapi ujian. Pendampingan yang disesuaikan dengan kebutuhan
          membantu calon mahasiswa menyusun langkah persiapan secara lebih
          terarah menuju perguruan tinggi pilihan.
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
      <ListKelHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecPtn;
