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

const HalamanKelCbtUgm = () => {
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
        {/* Fix Title: Menggunakan satu string utuh di dalam kurung kurawal agar aman dari error */}
        <title>{`Bimbel & Les Privat CBT UGM ${kelurahan.kelurahan} 2026 - Lolos UTUL UGM #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target CBT UGM + Lokasi Kelurahan Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat CBT UGM terbaik di ${kelurahan.kelurahan}. Persiapan intensif UTUL UGM 2026 Saintek & Soshum. Guru privat datang ke rumah di wilayah ${kelurahan.kelurahan}. Master Teacher Expert & Modul Akurat. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel cbt ugm ${kelurahan.kelurahan}, les privat cbt ugm ${kelurahan.kelurahan}, persiapan utul ugm ${kelurahan.kelurahan}, guru privat ugm ke rumah, bimbingan belajar ugm, Bimbel LPS`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/guru-les-privat-cbt-ugm/${kelurahan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat CBT UGM di ${kelurahan.kelurahan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Gadjah Mada melalui program spesialis Bimbel & Les Privat CBT UGM di kelurahan ${kelurahan.kelurahan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/guru-les-privat-cbt-ugm/${kelurahan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Spek Tinggi untuk mendominasi Google Maps & Search Lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat CBT UGM Edumatrix ${kelurahan.kelurahan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/guru-les-privat-cbt-ugm/${kelurahan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kelurahan.kelurahan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan ujian mandiri CBT UGM (UTUL UGM) untuk wilayah kelurahan ${kelurahan.kelurahan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel & Les Privat CBT UGM {kelurahan.kelurahan} Terbaik - Bimbel
          Privat Intensif Masuk UGM
        </h1>
        <p className="desk-seo-lps">
          Bimbel & Les Privat CBT UGM {kelurahan.kelurahan} Terbaik. Les Privat
          UTUL UGM Saintek Soshum IPC, Master Teacher Berpengalaman, Drilling
          Soal UTUL, Privat Offline Online, Jadwal Fleksibel, Konsultasi
          Progress Belajar
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

export default HalamanKelCbtUgm;
