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
import ListKelHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKelHalamanSimakUi";
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

const HalamanKecSimakUi = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam {} agar terbaca sebagai string tunggal (Anti-Error) */}
        <title>{`Bimbel & Les Privat SIMAK UI ${kecamatan.kecamatan} 2026 - Lolos UI #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target SIMAK UI & KKI + Lokasi Kecamatan */}
        <meta
          name="description"
          content={`Bimbel & Les Privat SIMAK UI terbaik di ${kecamatan.kecamatan}. Program intensif SIMAK UI Reguler & KKI (International Class). Modul prediksi, Master Teacher ke rumah wilayah ${kecamatan.kecamatan}, & Tryout khusus UI. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel simak ui ${kecamatan.kecamatan}, les privat simak ui ${kecamatan.kecamatan}, persiapan simak kki ${kecamatan.kecamatan}, guru privat ui ke rumah, bimbingan belajar simak ui, Bimbel LPS`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/bimbingan-simak-ui/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat SIMAK UI di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Universitas Indonesia (Reguler & KKI) melalui program spesialis Bimbel & Les Privat di ${kecamatan.kecamatan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/bimbingan-simak-ui/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat kuat untuk SEO Lokal tingkat Kecamatan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat SIMAK UI Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/bimbingan-simak-ui/${kecamatan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan SIMAK UI dan Kelas Internasional (KKI) untuk wilayah ${kecamatan.kecamatan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbingan Simak UI {kecamatan.kecamatan} - Intensif Privat Program
          Simak UI dan Kelas Internasional
        </h1>
        <p className="desk-seo-lps">
          Bimbingan Simak UI - Program Belajar Les Privat Simak UI dan Simak
          KKI, Modul Simak UI, Drilling Soal, Konsultasi Jurusan, Try Out Simak
          UI, Belajar All Subtes Simak UI dan KKI, Offline dan Online
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
      <ListKelHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecSimakUi;
