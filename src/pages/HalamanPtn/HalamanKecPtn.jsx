import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
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
import ListKelHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKelHalamanPtn";
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

const HalamanKecPtn = () => {
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
        {/* Anti-Error Title: Menggunakan template literal di dalam kurung kurawal agar terbaca sebagai string tunggal */}
        <title>{`Bimbel & Les Privat Masuk PTN ${kecamatan.kecamatan} 2026 - Lolos PTN #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Menggabungkan Bimbel & Les Privat + Target PTN Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat Masuk PTN terbaik di ${kecamatan.kecamatan}. Program intensif UTBK SNBT, SIMAK UI, & CBT UGM 2026. Modul lengkap, Master Teacher ke rumah, & Tryout akurat. Daftar sekarang di Edumatrix!`}
        />
        <meta
          name="keywords"
          content={`bimbel les privat ${kecamatan.kecamatan}, bimbel ptn ${kecamatan.kecamatan}, les privat kedokteran ${kecamatan.kecamatan}, bimbingan belajar ${kecamatan.kecamatan}, karantina ptn ${kecamatan.kecamatan}, guru privat ${kecamatan.kecamatan}`}
        />

        {/* Link Canonical yang Rapi */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbingan-masuk-ptn/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi PTN Impian bersama spesialis Bimbel & Les Privat di ${kecamatan.kecamatan}. Program intensif Kedokteran 2026.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbingan-masuk-ptn/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup untuk SEO Lokal Tingkat Kecamatan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbingan-masuk-ptn/${kecamatan.slug}`,
            telephone: "+6282258689993",
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat persiapan masuk PTN favorit di wilayah ${kecamatan.kecamatan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Masuk PTN di {kecamatan.kecamatan} - Bimbel Les Privat dan
          Supercamp - Masuk FK & PTN
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk PTN Terbaik Berpengalaman. Intensif Privat Sukses Masuk
          PTN, Modul UTBK SNBT Lengkap, Tryout UTBK Online, Konsultasi Jurusan
          dan PTN, Privat Semua Subtes UTBK, Report Progress
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
      <ListKelHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecPtn;
