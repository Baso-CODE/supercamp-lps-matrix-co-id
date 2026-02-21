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
import ListKelHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKelHalamanKedokteran";
import LulusanLps from "../../Components/LulusanLPS/LulusanLPS";
import PaketBelajarSnbtNew from "../../Components/PaketBelajarSnbt/PaketBelajarSnbtNew";
import PaketSupercampLps from "../../Components/PaketSupercamp/PaketSupercampLps";
import SlideCtaLps from "../../Components/SlideCtaLps/SlideCtaLps";
import TargetBelajarLps from "../../Components/TargetBelajarLps/TargetBelajarLps";
import TestimoniLps from "../../Components/TestimoniLps/TestimoniLps";
import TestimoniLps2 from "../../Components/TestimoniLps2/TestimoniLps2";
import VenueScLps from "../../Components/VenueScLps/VenueScLps";
import VideoScLps from "../../Components/VideoScLps/VideoScLps";
import WaktuPelaksanaanSc from "../../Components/WaktuPelaksanaanSc/WaktuPelaksanaanSc";

const HalamanKecKedokteran = () => {
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
        {/* Fix Title: Menggunakan satu string utuh agar tidak error di React Helmet */}
        <title>{`Bimbel & Les Privat Kedokteran ${kecamatan.kecamatan} 2026 - Lolos FK #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword (Bimbel + Les Privat) + Lokasi Kecamatan */}
        <meta
          name="description"
          content={`Bimbel & Les Privat khusus masuk Kedokteran di ${kecamatan.kecamatan} terbaik. Program intensif lulus FK UI, UGM, UNAIR, & ITB. Guru datang ke rumah wilayah ${kecamatan.kecamatan} atau Online. Daftar sekarang di Edumatrix!`}
        />
        <meta
          name="keywords"
          content={`bimbel kedokteran ${kecamatan.kecamatan}, les privat kedokteran ${kecamatan.kecamatan}, bimbingan belajar kedokteran ${kecamatan.kecamatan}, karantina ptn ${kecamatan.kecamatan}, guru privat ke rumah`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-les-privat-masuk-kedokteran/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat Kedokteran di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Persiapan intensif masuk Fakultas Kedokteran bersama spesialis Bimbel & Les Privat di ${kecamatan.kecamatan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-les-privat-masuk-kedokteran/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat kuat untuk SEO Lokal tingkat Kecamatan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat Kedokteran Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbel-les-privat-masuk-kedokteran/${kecamatan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan masuk Fakultas Kedokteran PTN Favorit untuk wilayah ${kecamatan.kecamatan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbingan Masuk Kedokteran {kecamatan.kecamatan} Terbaik - Program
          Belajar Fokus Kedokteran UI dan PTN Favorit
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk Kedokteran Terbaik Berpengalaman. Intensif Privat Sukses
          Masuk PTN, Modul UTBK SNBT Lengkap, Tryout UTBK Online, Konsultasi
          Jurusan dan PTN, Privat Semua Subtes UTBK, Report Progress
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
      <TestimoniLps />
      <TestimoniLps2 />
      <ListAlumni />
      <ListKelHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecKedokteran;
