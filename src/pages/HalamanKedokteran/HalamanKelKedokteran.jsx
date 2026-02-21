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

const HalamanKelKedokteran = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam {} agar terbaca sebagai string tunggal oleh Helmet */}
        <title>{`Bimbel & Les Privat Kedokteran ${kelurahan.kelurahan} 2026 - Lolos FK #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target Kedokteran + Lokasi Kelurahan Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat Kedokteran terbaik di ${kelurahan.kelurahan}. Program intensif lulus FK UI, UGM, & UNAIR. Guru privat datang ke rumah di wilayah ${kelurahan.kelurahan}. Master Teacher Expert & Modul Akurat. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel kedokteran ${kelurahan.kelurahan}, les privat kedokteran ${kelurahan.kelurahan}, bimbingan belajar kedokteran ${kelurahan.kelurahan}, guru privat ke rumah ${kelurahan.kelurahan}, karantina ptn ${kelurahan.kelurahan}`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/guru-les-privat-masuk-kedokteran/${kelurahan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat Kedokteran di ${kelurahan.kelurahan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Persiapan intensif masuk Fakultas Kedokteran bersama spesialis Bimbel & Les Privat di kelurahan ${kelurahan.kelurahan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/guru-les-privat-masuk-kedokteran/${kelurahan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Kunci utama SEO Lokal tingkat Kelurahan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Kedokteran Edumatrix ${kelurahan.kelurahan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/guru-les-privat-masuk-kedokteran/${kelurahan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kelurahan.kelurahan,
              addressCountry: "ID",
            },
            description: `Layanan Bimbel dan Les Privat spesialis persiapan masuk Fakultas Kedokteran PTN Favorit untuk wilayah kelurahan ${kelurahan.kelurahan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Privat Masuk Kedokteran {kelurahan.kelurahan} Terbaik - Program
          Belajar Fokus Kedokteran UI dan PTN Favorit
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk Kedokteran Terbaik - Sesi Belajar Super Intensif,
          Konsultasi Progress, Master Teacher Expert Berpengalaman, Modul
          Belajar, Karantina Spesialis FK PTN UI UGM Unpad IPB
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
      {/* <ListKabLps /> */}
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelKedokteran;
