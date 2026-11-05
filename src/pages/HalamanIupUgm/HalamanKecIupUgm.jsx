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
import ListKelHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKelHalamanIupUgm";
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

const HalamanKecIupUgm = () => {
  // =========================================
  // AMBIL PARAMETER KECAMATAN
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
  const canonicalUrl = `${DOMAIN}/bimbel-les-privat-iup-ugm/${encodeURIComponent(
    slugKecamatan,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Bimbingan IUP UGM ${namaKecamatan} | Privat Seleksi Internasional`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbingan IUP UGM di ${namaKecamatan} dengan les privat intensif. Latihan bahasa Inggris, penguatan akademik, dan persiapan wawancara seleksi internasional.`;

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
      name: "Bimbingan Seleksi International Undergraduate Program UGM",
      description:
        "Program pendampingan belajar untuk persiapan seleksi IUP Universitas Gadjah Mada melalui pengembangan kemampuan akademik, bahasa Inggris, dan keterampilan komunikasi sesuai persyaratan program studi.",
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
          content={`Program bimbingan seleksi IUP UGM untuk siswa di ${namaKecamatan}`}
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
          Bimbingan IUP UGM di{" "}
          <span className="highlight-city">{namaKecamatan}</span> – Les Privat
          Persiapan Seleksi Program Internasional
        </h1>

        <p className="desk-seo-lps">
          Mengikuti seleksi International Undergraduate Program (IUP)
          Universitas Gadjah Mada membutuhkan persiapan yang mempertimbangkan
          kemampuan akademik dan keterampilan komunikasi calon mahasiswa. Bagi
          siswa di {namaKecamatan}, program <strong>Bimbingan IUP UGM</strong>{" "}
          dari Supercamp Matrix Indonesia membantu peserta membangun kesiapan
          menghadapi proses penerimaan melalui pembelajaran privat yang terarah
          dan disesuaikan dengan kebutuhan masing-masing siswa.
          <br />
          <br />
          Salah satu aspek yang perlu diperhatikan dalam persiapan program
          internasional adalah kemampuan memahami dan menggunakan bahasa Inggris
          dalam konteks akademik. Melalui latihan membaca, pengembangan
          kosakata, serta pembahasan materi akademik, siswa dapat meningkatkan
          kemampuan mengolah informasi dan menyampaikan gagasan secara lebih
          sistematis. Materi latihan disesuaikan dengan kebutuhan seleksi dan
          program studi yang menjadi tujuan peserta.
          <br />
          <br />
          Selain kemampuan akademik, kesiapan berkomunikasi juga dapat menjadi
          bagian penting dalam proses seleksi. Apabila program studi yang
          dipilih mensyaratkan wawancara, peserta dapat berlatih menjelaskan
          motivasi memilih jurusan, menguraikan pengalaman belajar, dan
          menyampaikan alasan memilih International Undergraduate Program UGM.
          Latihan ini membantu siswa di {namaKecamatan}
          mengembangkan kepercayaan diri sekaligus kemampuan menyampaikan
          jawaban secara jelas dan terstruktur.
          <br />
          <br />
          Setiap program studi IUP UGM dapat menerapkan persyaratan penerimaan
          yang berbeda. Oleh karena itu, persiapan perlu mempertimbangkan
          ketentuan resmi, kemampuan awal siswa, serta waktu belajar yang
          tersedia. Melalui pendampingan privat, evaluasi hasil latihan, dan
          penyusunan target belajar secara bertahap, calon mahasiswa dapat
          membangun strategi persiapan yang lebih efektif untuk mengikuti
          seleksi IUP Universitas Gadjah Mada.
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
      <ListKelHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecIupUgm;
