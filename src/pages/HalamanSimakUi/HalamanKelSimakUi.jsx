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

const HalamanKelSimakUi = () => {
  const { kelSlug } = useParams();
  const [kelurahan, setKelurahan] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  useEffect(() => {
    const axiosJWT = axios.create();
    const getKelurahan = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/kelurahankec/${kelSlug}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKelurahan(response.data);
    };
    getKelurahan(kelSlug);
  }, [kelSlug, query]);
  return (
    <>
      <Helmet>
        {/* Fix Title: Menggunakan satu string utuh agar aman dari error Helmet */}
        <title>{`Bimbel & Les Privat SIMAK UI ${kelurahan.kelurahan} 2026 - Lolos UI #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target SIMAK UI & KKI + Lokasi Kelurahan Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat SIMAK UI terbaik di ${kelurahan.kelurahan}. Program intensif lulus SIMAK UI Reguler & KKI (International Class). Master Teacher ke rumah wilayah ${kelurahan.kelurahan}. Daftar sekarang di Edumatrix!`}
        />
        <meta
          name="keywords"
          content={`bimbel simak ui ${kelurahan.kelurahan}, les privat simak ui ${kelurahan.kelurahan}, persiapan simak kki ${kelurahan.kelurahan}, guru privat ui ke rumah, bimbingan belajar simak ui, Bimbel LPS`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/guru-les-privat-simak-ui/${kelurahan.slug}`}
        />

        {/* Open Graph (Optimal untuk WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat SIMAK UI di ${kelurahan.kelurahan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Universitas Indonesia (Reguler & KKI) bersama spesialis Bimbel & Les Privat di kelurahan ${kelurahan.kelurahan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/guru-les-privat-simak-ui/${kelurahan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat kuat untuk SEO Lokal tingkat Kelurahan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat SIMAK UI Edumatrix ${kelurahan.kelurahan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/guru-les-privat-simak-ui/${kelurahan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kelurahan.kelurahan,
              addressCountry: "ID",
            },
            description: `Layanan Bimbel dan Les Privat spesialis persiapan SIMAK UI dan Kelas Internasional (KKI) untuk wilayah kelurahan ${kelurahan.kelurahan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel & Les Privat Simak UI {kelurahan.kelurahan} - Intensif Privat
          Program Simak UI dan Kelas Internasional
        </h1>
        <p className="desk-seo-lps">
          Bimbel & Les Privat Simak UI {kelurahan.kelurahan} - Program Belajar
          Les Privat Simak UI dan Simak KKI, Modul Simak UI, Drilling Soal,
          Konsultasi Jurusan, Try Out Simak UI, Belajar All Subtes Simak UI dan
          KKI, Offline dan Online
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

      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelSimakUi;
