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

const HalamanKelPtn = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam kurung kurawal agar terbaca sebagai string tunggal oleh Helmet */}
        <title>{`Bimbel & Les Privat Masuk PTN ${kelurahan.kelurahan} 2026 - Lolos PTN #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Kombinasi Hybrid (Bimbel + Les Privat) + Lokasi Kelurahan */}
        <meta
          name="description"
          content={`Bimbel & Les Privat Masuk PTN terbaik di ${kelurahan.kelurahan}. Program intensif UTBK SNBT, SIMAK UI, & CBT UGM 2026. Spesialis Kedokteran & PTN Favorit. Guru datang ke rumah wilayah ${kelurahan.kelurahan}. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel les privat ${kelurahan.kelurahan}, bimbel ptn ${kelurahan.kelurahan}, les privat kedokteran ${kelurahan.kelurahan}, guru privat ke rumah ${kelurahan.kelurahan}, bimbingan belajar ${kelurahan.kelurahan}, karantina ptn ${kelurahan.kelurahan}`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/guru-bimbel-masuk-ptn/${kelurahan.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat di ${kelurahan.kelurahan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi PTN Impian bersama spesialis Bimbel & Les Privat di wilayah ${kelurahan.kelurahan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/guru-bimbel-masuk-ptn/${kelurahan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat krusial untuk SEO Lokal tingkat Kelurahan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Edumatrix ${kelurahan.kelurahan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/guru-bimbel-masuk-ptn/${kelurahan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kelurahan.kelurahan,
              addressCountry: "ID",
            },
            description: `Layanan Bimbel dan Les Privat persiapan masuk PTN favorit untuk wilayah kelurahan ${kelurahan.kelurahan}.`,
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbingan Masuk PTN {kelurahan.kelurahan} - Program Intensif Privat
          UTBK SNBT Spesialis Masuk PTN
        </h1>
        <p className="desk-seo-lps">
          Bimbingan Masuk PTN di {kelurahan.kelurahan} Terbaik Berpengalaman.
          Intensif Privat Sukses Masuk PTN, Modul UTBK SNBT Lengkap, Tryout UTBK
          Online, Konsultasi Jurusan dan PTN, Privat Semua Subtes UTBK, Report
          Progress
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

export default HalamanKelPtn;
