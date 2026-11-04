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
import ListKecHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKecHalamanSimakUi";
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

const HalamanKabSimakUi = () => {
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
        {/* Fix Title: Menggunakan kurung kurawal agar terbaca sebagai string tunggal (Anti-Error) */}
        <title>{`Bimbel & Les Privat SIMAK UI ${kabupaten.kota_kabupaten} 2026 - Lolos UI #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Menggabungkan Bimbel & Les Privat + Target SIMAK UI & KKI + Lokasi Kabupaten */}
        <meta
          name="description"
          content={`Bimbel & Les Privat SIMAK UI terbaik di ${kabupaten.kota_kabupaten}. Program intensif SIMAK UI Reguler & KKI (International Class). Modul prediksi, Master Teacher ke rumah, & Tryout khusus UI di ${kabupaten.kota_kabupaten}. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel simak ui ${kabupaten.kota_kabupaten}, les privat simak ui ${kabupaten.kota_kabupaten}, persiapan simak kki ${kabupaten.kota_kabupaten}, bimbel kki ui, guru privat ui ke rumah, karantina simak ui, Bimbel LPS`}
        />

        {/* Canonical Link yang Bersih */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/bimbel-privat-simak-ui/${kabupaten.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat SIMAK UI di ${kabupaten.kota_kabupaten} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Universitas Indonesia (Reguler & KKI) melalui program spesialis Bimbel & Les Privat di ${kabupaten.kota_kabupaten}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/bimbel-privat-simak-ui/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat penting untuk otoritas SEO Lokal Kabupaten */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat SIMAK UI Edumatrix ${kabupaten.kota_kabupaten}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/bimbel-privat-simak-ui/${kabupaten.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kabupaten.kota_kabupaten,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan SIMAK UI dan Kelas Internasional (KKI) untuk wilayah ${kabupaten.kota_kabupaten}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat Simak UI {kabupaten.kota_kabupaten} - Intensif Privat
          Program Simak UI dan Kelas Internasional
        </h1>
        <p className="desk-seo-lps">
          Bimbel Simak UI di {kabupaten.kota_kabupaten} - Program Belajar Les
          Privat Simak UI dan Simak KKI, Modul Simak UI, Drilling Soal,
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
      <ListKecHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabSimakUi;
