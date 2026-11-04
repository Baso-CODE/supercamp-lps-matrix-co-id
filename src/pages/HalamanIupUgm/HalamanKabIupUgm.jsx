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

const HalamanKabIupUgm = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam {} agar aman dari error Helmet */}
        <title>{`Bimbel & Les Privat IUP UGM ${kabupaten.kota_kabupaten} 2026 - Lolos Intake #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target IUP UGM (GMST/AcEPT) + Lokasi Kabupaten */}
        <meta
          name="description"
          content={`Bimbel & Les Privat IUP UGM terbaik di ${kabupaten.kota_kabupaten}. Persiapan intensif GMST, AcEPT, & Interview spesialis lulus FK & Non-FK. Guru datang ke rumah wilayah ${kabupaten.kota_kabupaten}. Master Teacher Expert & drilling soal terbaru. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel iup ugm ${kabupaten.kota_kabupaten}, les privat iup ugm ${kabupaten.kota_kabupaten}, persiapan gmst ${kabupaten.kota_kabupaten}, pelatihan acept ugm, bimbel iup kedokteran, guru privat iup ugm, Bimbel LPS`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/les-privat-iup-ugm/${kabupaten.slug}`}
        />

        {/* Open Graph (Optimal untuk WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat IUP UGM di ${kabupaten.kota_kabupaten} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi International Undergraduate Program (IUP) UGM melalui bimbingan spesialis di ${kabupaten.kota_kabupaten}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/les-privat-iup-ugm/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat penting untuk otoritas SEO Lokal tingkat Kabupaten */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat IUP UGM Edumatrix ${kabupaten.kota_kabupaten}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/les-privat-iup-ugm/${kabupaten.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kabupaten.kota_kabupaten,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan International Undergraduate Program (IUP) UGM untuk wilayah ${kabupaten.kota_kabupaten}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat IUP UGM di {kabupaten.kota_kabupaten} Terbaik - Intensif
          Privat IUP UGM FK dan Non FK
        </h1>
        <p className="desk-seo-lps">
          Les Privat IUP UGM {kabupaten.kota_kabupaten} Terbaik. Fokus Les
          Intensif IUP UGM Kedokteran dan Non FK, Belajar All Subtest, Master
          Teacher Berpengalaman, Jadwal Fleksibel, CS Responsif, Konsultasi
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
      <ListKecHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabIupUgm;
