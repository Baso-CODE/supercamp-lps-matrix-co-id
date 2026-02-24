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
import ListKecHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKecHalamanKedokteran";
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

const HalamanKabKedokteran = () => {
  const { id } = useParams();
  const [kabupaten, setKabupaten] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  useEffect(() => {
    const axiosJWT = axios.create();
    const getKabupaten = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/ibukotakabupaten/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKabupaten(response.data);
    };
    getKabupaten(id);
  }, [id, query]);
  return (
    <>
      <Helmet>
        {/* Anti-Error Title: String tunggal di dalam kurung kurawal */}
        <title>{`Bimbel & Les Privat Kedokteran ${kabupaten.kota_kabupaten} 2026 - Lolos FK #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Menggabungkan Bimbel & Les Privat + Target Kampus Kedokteran Top */}
        <meta
          name="description"
          content={`Bimbel & Les Privat khusus masuk Kedokteran di ${kabupaten.kota_kabupaten} terbaik. Program intensif lulus FK UI, UGM, UNAIR, & UNDIP. Guru datang ke rumah atau Online. Master Teacher Expert & Modul Akurat. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel kedokteran ${kabupaten.kota_kabupaten}, les privat kedokteran ${kabupaten.kota_kabupaten}, bimbingan belajar kedokteran ${kabupaten.kota_kabupaten}, karantina fk ui, karantina fk ugm, guru privat ke rumah`}
        />

        {/* Canonical Link yang Bersih */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbingan-masuk-kedokteran/${kabupaten.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat Kedokteran di ${kabupaten.kota_kabupaten} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Persiapan intensif masuk Fakultas Kedokteran bersama spesialis Bimbel & Les Privat di ${kabupaten.kota_kabupaten}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbingan-masuk-kedokteran/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat penting untuk otoritas SEO Lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Kedokteran Edumatrix ${kabupaten.kota_kabupaten}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbingan-masuk-kedokteran/${kabupaten.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kabupaten.kota_kabupaten,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan masuk Fakultas Kedokteran PTN Favorit untuk wilayah ${kabupaten.kota_kabupaten}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat Masuk Kedokteran di {kabupaten.kota_kabupaten} Terbaik -
          Program Belajar Fokus Kedokteran UI dan PTN Favorit - Spesialis Masuk
          Kedokteran
        </h1>
        <p className="desk-seo-lps">
          Les Privat Masuk Kedokteran di {kabupaten.kota_kabupaten} Terbaik -
          Sesi Belajar Super Intensif, Konsultasi Progress, Master Teacher
          Expert Berpengalaman, Modul Belajar, Karantina Spesialis FK PTN UI UGM
          Unpad IPB
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
      <ListKecHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabKedokteran;
