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
import ListKecHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKecHalamanIupUgm";
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

const HalamanKabIupUgm = () => {
  // =========================================
  // AMBIL PARAMETER KABUPATEN
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
  const canonicalUrl = `${DOMAIN}/les-privat-iup-ugm/${encodeURIComponent(
    slugKabupaten,
  )}`;

  // =========================================
  // IMAGE URL
  // =========================================
  const imageUrl = `${DOMAIN}/images/banner.webp`;

  // =========================================
  // SEO TITLE KHUSUS DOMAIN .CO.ID
  // =========================================
  const pageTitle = `Persiapan IUP UGM ${namaKabupaten} | Les Privat Intensif`;

  // =========================================
  // META DESCRIPTION
  // =========================================
  const pageDescription = `Persiapan seleksi IUP UGM di ${namaKabupaten} melalui les privat intensif. Tingkatkan kemampuan akademik, bahasa Inggris, dan kesiapan wawancara.`;

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
      name: "Persiapan International Undergraduate Program UGM",
      description:
        "Pendampingan belajar untuk persiapan seleksi International Undergraduate Program Universitas Gadjah Mada melalui penguatan akademik, bahasa Inggris, dan latihan wawancara sesuai persyaratan program studi.",
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
          content={`Program persiapan International Undergraduate Program UGM di ${namaKabupaten}`}
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
          Les Privat Persiapan IUP UGM di{" "}
          <span className="highlight-city">{namaKabupaten}</span> – Bimbingan
          Seleksi Program Internasional
        </h1>

        <p className="desk-seo-lps">
          International Undergraduate Program (IUP) Universitas Gadjah Mada
          menawarkan kesempatan bagi calon mahasiswa untuk mengikuti pendidikan
          sarjana dengan orientasi internasional. Proses penerimaan pada program
          ini perlu dipersiapkan dengan memahami persyaratan akademik, kemampuan
          berbahasa Inggris, serta tahapan seleksi yang berlaku pada program
          studi pilihan. Bagi siswa di {namaKabupaten}, program{" "}
          <strong>Les Privat Persiapan IUP UGM</strong> dari Supercamp Matrix
          Indonesia membantu peserta membangun kesiapan seleksi melalui
          pembelajaran yang lebih terarah.
          <br />
          <br />
          Persiapan akademik menjadi salah satu aspek penting bagi calon
          mahasiswa yang ingin mengikuti seleksi IUP UGM. Melalui pendampingan
          belajar, siswa dapat memperkuat pemahaman konsep, mengembangkan
          kemampuan berpikir analitis, serta meningkatkan keterampilan
          menyelesaikan soal. Materi pembelajaran dapat disesuaikan dengan
          kebutuhan program studi, termasuk penguatan kemampuan akademik yang
          relevan dengan tahapan penerimaan masing-masing fakultas.
          <br />
          <br />
          Selain kemampuan akademik, penguasaan bahasa Inggris juga menjadi
          bagian penting dalam persiapan menuju program pendidikan
          internasional. Calon mahasiswa dari {namaKabupaten} dapat melatih
          kemampuan memahami informasi akademik, memperluas kosakata, serta
          meningkatkan keterampilan berkomunikasi dalam bahasa Inggris.
          Persiapan juga dapat mencakup latihan wawancara apabila tahapan
          tersebut menjadi persyaratan seleksi program studi yang dipilih.
          <br />
          <br />
          Setiap program studi IUP UGM dapat memiliki ketentuan penerimaan yang
          berbeda. Oleh karena itu, persiapan perlu mempertimbangkan target
          jurusan, kemampuan awal siswa, dan jadwal seleksi yang berlaku.
          Melalui program les privat intensif, latihan terstruktur, serta
          evaluasi perkembangan belajar, calon mahasiswa dapat menyusun strategi
          persiapan yang lebih sistematis menuju International Undergraduate
          Program Universitas Gadjah Mada.
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
      <ListKecHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabIupUgm;
