import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
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
import ListKelHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKelHalamanCbtUgm";
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

const HalamanKecCbtUgm = () => {
  const { id, kecSlug } = useParams();
  const [kecamatan, setKecamatan] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKecamatan = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/kecamatankab/${kecSlug}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKecamatan(response.data);
    };
    getKecamatan(id);
  }, [id, query, axiosJWT, kecSlug]);
  return (
    <>
      <Helmet>
        {/* Perbaikan Title: Menggunakan string tunggal agar aman dari error Helmet */}
        <title>{`Bimbel & Les Privat CBT UGM ${kecamatan.kecamatan} 2026 - Lolos UTUL UGM #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target CBT UGM + Lokasi Kecamatan Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat CBT UGM terbaik di ${kecamatan.kecamatan}. Persiapan intensif UTUL UGM 2026 Saintek & Soshum. Master Teacher datang ke rumah wilayah ${kecamatan.kecamatan}, drilling soal prediksi, & jadwal fleksibel. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel cbt ugm ${kecamatan.kecamatan}, les privat cbt ugm ${kecamatan.kecamatan}, persiapan utul ugm ${kecamatan.kecamatan}, guru privat ugm ke rumah, bimbingan belajar ugm, Bimbel LPS`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbingan-privat-cbt-ugm/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat CBT UGM di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Gadjah Mada melalui program spesialis Bimbel & Les Privat CBT UGM di wilayah ${kecamatan.kecamatan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbingan-privat-cbt-ugm/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Spek Tinggi untuk mendominasi Google Maps & Search Lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat CBT UGM Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbingan-privat-cbt-ugm/${kecamatan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan ujian mandiri CBT UGM (UTUL UGM) untuk wilayah ${kecamatan.kecamatan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbingan CBT UGM di {kecamatan.kecamatan} - Bimbel Privat Intensif
          Masuk UGM
        </h1>
        <p className="desk-seo-lps">
          Bimbingan CBT UGM di {kecamatan.kecamatan} Terbaik. Les Privat UTUL
          UGM Saintek Soshum IPC, Master Teacher Berpengalaman, Drilling Soal
          UTUL, Privat Offline Online, Jadwal Fleksibel, Konsultasi Progress
          Belajar
        </p>
      </div>
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
      <ListKelHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecCbtUgm;
