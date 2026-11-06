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
import ListKabHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKabHalamanPtn";
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

const HalamanKotaPtn = () => {
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
  const canonicalUrl = `${DOMAIN}/bimbel-masuk-ptn/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE
  // =========================================
  const pageTitle = `Bimbel Masuk PTN ${namaKota} | Les Privat & Supercamp`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel masuk PTN di ${namaKota} dengan program les privat dan Supercamp. Persiapan UTBK SNBT, seleksi mandiri, konsultasi jurusan, dan tryout.`;

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
        "Program bimbingan belajar untuk persiapan masuk PTN melalui UTBK SNBT dan seleksi mandiri, mencakup penguatan akademik, latihan soal, simulasi ujian, serta perencanaan pilihan program studi.",
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
          content={`Program bimbel masuk PTN untuk siswa di ${namaKota}`}
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
          <span className="highlight-city">{namaKota}</span> – Persiapan SNBT,
          Seleksi Mandiri, dan Supercamp
        </h1>

        <p className="desk-seo-lps">
          Melanjutkan pendidikan ke perguruan tinggi negeri membutuhkan
          persiapan yang tidak hanya berfokus pada kemampuan akademik, tetapi
          juga pemahaman terhadap jalur penerimaan dan pemilihan program studi.
          Bagi calon mahasiswa di {namaKota}, program{" "}
          <strong>Bimbel Masuk PTN</strong> dari Supercamp Matrix Indonesia
          membantu peserta merencanakan persiapan seleksi melalui bimbingan
          akademik, latihan soal, dan pendampingan belajar intensif.
          <br />
          <br />
          Setiap perguruan tinggi memiliki pilihan program studi dengan
          ketentuan penerimaan yang perlu diperhatikan oleh calon mahasiswa.
          Jalur Seleksi Nasional Berdasarkan Tes (SNBT) dan seleksi mandiri
          menjadi beberapa pilihan yang dapat dipertimbangkan sesuai persyaratan
          masing-masing kampus. Pemahaman terhadap jadwal, jalur penerimaan,
          serta ketentuan seleksi membantu siswa menyusun rencana persiapan
          secara lebih sistematis.
          <br />
          <br />
          Untuk menghadapi UTBK SNBT, peserta dapat memperkuat kemampuan
          penalaran, literasi, pemahaman bacaan, serta pengetahuan kuantitatif
          sesuai ketentuan ujian yang berlaku. Melalui pembahasan soal, latihan
          terstruktur, dan simulasi ujian, siswa dapat meningkatkan ketelitian
          sekaligus mengembangkan strategi pengerjaan soal. Bagi peserta yang
          memilih jalur seleksi mandiri, materi persiapan perlu disesuaikan
          dengan ketentuan perguruan tinggi tujuan.
          <br />
          <br />
          Selain persiapan akademik, pemilihan program studi merupakan bagian
          penting dalam proses masuk PTN. Calon mahasiswa di {namaKota}
          yang menargetkan UI, UGM, ITB, UNAIR, UNDIP, maupun perguruan tinggi
          negeri lainnya dapat mempertimbangkan minat, kemampuan akademik, daya
          tampung, dan persyaratan seleksi sebagai bagian dari strategi
          menentukan pilihan pendidikan.
          <br />
          <br />
          Melalui program <strong>Les Privat dan Supercamp Masuk PTN</strong>,
          siswa dapat memperoleh pendampingan belajar untuk memperkuat pemahaman
          akademik, mengevaluasi hasil latihan, dan menyusun target belajar
          berdasarkan perkembangan kemampuan. Dengan persiapan yang terstruktur,
          calon mahasiswa dapat membangun kesiapan menghadapi proses seleksi
          masuk perguruan tinggi negeri.
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
      <ListKabHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaPtn;
