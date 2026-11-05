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
import ListKabHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKabHalamanIupUgm";
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

const HalamanKotaIupUgm = () => {
  // =========================================
  // PARAMETER WILAYAH
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
  const canonicalUrl = `${DOMAIN}/bimbel-privat-iup-ugm/${encodeURIComponent(
    slugKota,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Bimbel IUP UGM ${namaKota} | Persiapan Seleksi Internasional`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Bimbel IUP UGM di ${namaKota} untuk persiapan seleksi program internasional. Les privat akademik, bahasa Inggris, dan pendampingan masuk UGM.`;

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
      name: "Bimbingan Persiapan International Undergraduate Program UGM",
      description:
        "Program bimbingan belajar untuk mempersiapkan seleksi International Undergraduate Program Universitas Gadjah Mada melalui penguatan kemampuan akademik, bahasa Inggris, dan perencanaan studi.",
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
          content={`Bimbingan persiapan IUP UGM untuk calon mahasiswa di ${namaKota}`}
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
          Bimbel Persiapan IUP UGM di{" "}
          <span className="highlight-city">{namaKota}</span> – Les Privat
          Seleksi Program Internasional UGM
        </h1>

        <p className="desk-seo-lps">
          International Undergraduate Program (IUP) Universitas Gadjah Mada
          merupakan pilihan pendidikan sarjana dengan orientasi internasional
          bagi calon mahasiswa yang ingin mengembangkan kemampuan akademik dalam
          lingkungan pembelajaran global. Untuk mengikuti proses penerimaan
          program ini, peserta perlu memahami persyaratan seleksi, pilihan
          program studi, serta kemampuan yang perlu dipersiapkan. Bagi siswa di{" "}
          {namaKota}, program <strong>Bimbel IUP UGM</strong> dari Supercamp
          Matrix Indonesia membantu calon mahasiswa menyusun persiapan belajar
          secara lebih sistematis sebelum mengikuti seleksi.
          <br />
          <br />
          Persiapan menuju IUP UGM dapat dimulai dengan menentukan program studi
          yang sesuai dengan minat, kemampuan, dan tujuan pendidikan siswa.
          Setiap fakultas atau program studi dapat memiliki persyaratan
          penerimaan yang berbeda, sehingga calon mahasiswa perlu memahami
          tahapan seleksi dan kompetensi yang menjadi prioritas. Melalui
          bimbingan akademik, peserta dapat memperkuat pemahaman konsep,
          mengembangkan penalaran, serta melatih kemampuan menyelesaikan soal
          berdasarkan kebutuhan program studi tujuan.
          <br />
          <br />
          Kemampuan bahasa Inggris juga menjadi bagian penting dalam
          mempersiapkan diri mengikuti pendidikan berorientasi internasional.
          Melalui latihan membaca, pemahaman kosakata akademik, dan pengembangan
          komunikasi, siswa di {namaKota} dapat membangun kemampuan berbahasa
          Inggris secara bertahap. Apabila program studi mensyaratkan wawancara
          atau tes kemampuan tertentu, persiapan dapat disesuaikan dengan bentuk
          evaluasi yang berlaku.
          <br />
          <br />
          Selain mempelajari materi seleksi, calon mahasiswa juga perlu
          mempertimbangkan jadwal pendaftaran, kelengkapan dokumen, serta
          ketentuan penerimaan resmi yang ditetapkan UGM. Perencanaan yang baik
          membantu peserta mengatur waktu belajar dan menentukan target
          persiapan secara realistis.
          <br />
          <br />
          Melalui program <strong>Bimbel & Les Privat IUP UGM</strong>, siswa
          dapat memperoleh pendampingan untuk memperkuat kemampuan akademik,
          mengembangkan keterampilan bahasa Inggris, serta mengevaluasi
          perkembangan belajar. Dengan strategi persiapan yang disesuaikan
          dengan kebutuhan individu, calon mahasiswa dapat membangun kesiapan
          menghadapi seleksi International Undergraduate Program Universitas
          Gadjah Mada.
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
      <ListKabHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaIupUgm;
