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
import ListKabHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKabHalamanCbtUgm";
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

const HalamanKotaCbtUgm = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam {} agar terbaca sebagai string tunggal (Anti-Error) */}
        <title>{`Bimbel & Les Privat CBT UGM ${kota.kota} 2026 - Lolos UTUL UGM #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target CBT UGM + Lokasi Kota Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat CBT UGM terbaik di ${kota.kota}. Persiapan intensif UTUL UGM 2026 Saintek & Soshum. Master Teacher berpengalaman, drilling soal prediksi, & jadwal fleksibel di ${kota.kota}. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel cbt ugm ${kota.kota}, les privat cbt ugm ${kota.kota}, persiapan utul ugm ${kota.kota}, bimbel ptn ${kota.kota}, bimbingan belajar ugm, guru privat ugm ke rumah`}
        />

        {/* Canonical Link yang Bersih */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/les-privat-cbt-ugm/${kota.slug}`}
        />

        {/* Open Graph (WhatsApp Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat CBT UGM di ${kota.kota} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Gadjah Mada melalui program spesialis Bimbel & Les Privat CBT UGM di ${kota.kota}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/les-privat-cbt-ugm/${kota.slug}`}
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
            name: `Bimbel & Les Privat CBT UGM Edumatrix ${kota.kota}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/les-privat-cbt-ugm/${kota.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan ujian mandiri CBT UGM (UTUL UGM) untuk wilayah ${kota.kota}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel UM UGM CBT di {kota.kota} Terbaik - Bimbel Privat Intensif
          Masuk UGM
        </h1>
        <p className="desk-seo-lps">
          Bimbel UM UGM CBT di {kota.kota} Terbaik. Les Privat UTUL UGM Saintek
          Soshum IPC, Master Teacher Berpengalaman, Drilling Soal UTUL, Privat
          Offline Online, Jadwal Fleksibel, Konsultasi Progress Belajar
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
      <ListKabHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaCbtUgm;
