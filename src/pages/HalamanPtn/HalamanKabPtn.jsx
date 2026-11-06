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
import ListKecHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKecHalamanPtn";
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

const HalamanKabPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-les-privat-masuk-ptn/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk PTN ${namaKabupaten} | Les Privat Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk PTN di ${namaKabupaten} dengan les privat intensif. Persiapan SNBT, seleksi mandiri, konsultasi jurusan, latihan soal, dan evaluasi belajar.`;

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
      name: "Bimbel dan Les Privat Persiapan Masuk PTN",
      description:
        "Program bimbingan belajar untuk persiapan masuk perguruan tinggi negeri melalui jalur SNBT dan seleksi mandiri, mencakup pendampingan akademik, latihan soal, evaluasi kemampuan, dan perencanaan pilihan program studi.",
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
          content={`Bimbingan persiapan masuk PTN untuk siswa di ${namaKabupaten}`}
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
          <span className="highlight-city">{namaKabupaten}</span> – Persiapan
          SNBT dan Seleksi Mandiri
        </h1>

        <p className="desk-seo-lps">
          Memilih perguruan tinggi negeri merupakan keputusan penting bagi calon
          mahasiswa yang ingin melanjutkan pendidikan ke jenjang sarjana. Selain
          mempersiapkan kemampuan akademik, siswa juga perlu memahami jalur
          penerimaan, pilihan program studi, serta persyaratan masing-masing
          kampus. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Bimbel & Les Privat Masuk PTN</strong> dari Supercamp Matrix
          Indonesia membantu peserta merencanakan persiapan seleksi secara lebih
          terarah.
          <br />
          <br />
          Persiapan masuk PTN dapat dilakukan melalui berbagai jalur penerimaan,
          termasuk Seleksi Nasional Berdasarkan Tes (SNBT) dan seleksi mandiri
          yang diselenggarakan oleh perguruan tinggi. Setiap jalur memiliki
          ketentuan serta proses seleksi yang dapat berbeda. Oleh karena itu,
          siswa perlu menyesuaikan strategi belajar dengan jalur dan kampus yang
          menjadi tujuan.
          <br />
          <br />
          Melalui program bimbingan intensif, siswa dapat memperkuat kemampuan
          penalaran, literasi, serta pengetahuan kuantitatif untuk menghadapi
          UTBK SNBT. Selain itu, peserta yang menargetkan seleksi mandiri dapat
          mempersiapkan materi sesuai ketentuan ujian dari perguruan tinggi
          tujuan. Latihan soal, simulasi ujian, dan evaluasi berkala membantu
          peserta mengenali kemampuan serta menentukan prioritas belajar.
          <br />
          <br />
          Bagi calon mahasiswa dari {namaKabupaten}
          yang memiliki target perguruan tinggi seperti UI, UGM, ITB, UNAIR,
          UNDIP, atau kampus negeri lainnya, pemilihan program studi juga
          membutuhkan pertimbangan yang matang. Minat akademik, kemampuan siswa,
          daya tampung, serta persyaratan penerimaan dapat menjadi bahan
          pertimbangan dalam menentukan pilihan jurusan dan perguruan tinggi.
          <br />
          <br />
          Melalui <strong>Bimbel Supercamp Masuk PTN</strong>, calon mahasiswa
          dapat mengikuti proses persiapan dengan latihan terstruktur,
          pendampingan tutor, serta evaluasi perkembangan belajar. Dengan
          strategi yang disesuaikan dengan kebutuhan, peserta dapat membangun
          kesiapan akademik untuk menghadapi proses penerimaan mahasiswa baru di
          perguruan tinggi negeri.
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
      <ListKecHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabPtn;
