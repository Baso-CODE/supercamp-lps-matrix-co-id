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
import ListKabHalamanSimakUi from "../../Components/ListHalamanSimakUi/ListKabHalamanSimakUi";
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

const HalamanKotaSimakUi = () => {
  const { id } = useParams();
  const [kota, setKota] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  useEffect(() => {
    const axiosJWT = axios.create();
    const getKota = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/kota/${id}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKota(response.data);
    };
    getKota(id);
  }, [id, query]);
  return (
    <>
      <Helmet>
        {/* Fix Title: Menggunakan satu string utuh agar tidak error di React Helmet */}
        <title>{`Bimbel & Les Privat SIMAK UI ${kota.kota} 2026 - Lolos UI #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target SIMAK UI & KKI + Lokasi Kota */}
        <meta
          name="description"
          content={`Bimbel & Les Privat SIMAK UI terbaik di ${kota.kota}. Program intensif SIMAK UI Reguler & KKI (International Class). Modul prediksi, Master Teacher berpengalaman, & Tryout khusus UI di ${kota.kota}. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel simak ui ${kota.kota}, les privat simak ui ${kota.kota}, persiapan simak kki ${kota.kota}, bimbel kki ui, tutor privat ui, karantina simak ui, edumatrix indonesia ${kota.kota}`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-simak-ui/${kota.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat SIMAK UI di ${kota.kota} - Edumatrix Indonesia`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Universitas Indonesia (Reguler & KKI) melalui program spesialis Bimbel & Les Privat di ${kota.kota}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-simak-ui/${kota.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat penting untuk otoritas SEO Lokal Kota */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat SIMAK UI Edumatrix ${kota.kota}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbel-simak-ui/${kota.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan SIMAK UI dan Kelas Internasional (KKI) untuk wilayah ${kota.kota}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Simak UI di {kota.kota} - Intensif Privat Program Simak UI dan
          Kelas Internasional
        </h1>
        <p className="desk-seo-lps">
          Bimbel Simak UI di {kota.kota} - Program Belajar Les Privat Simak UI
          dan Simak KKI, Modul Simak UI, Drilling Soal, Konsultasi Jurusan, Try
          Out Simak UI, Belajar All Subtes Simak UI dan KKI, Offline dan Online
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
      <ListKabHalamanSimakUi />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaSimakUi;
