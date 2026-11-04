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
import ListKabHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKabHalamanIupUgm";
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

const HalamanKotaIupUgm = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam kurung kurawal agar terbaca sebagai string tunggal */}
        <title>{`Bimbel & Les Privat IUP UGM ${kota.kota} 2026 - Lolos Intake #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Fokus pada GMST, AcEPT, dan target FK/Non-FK dengan lokasi Kota */}
        <meta
          name="description"
          content={`Bimbel & Les Privat IUP UGM terbaik di ${kota.kota}. Persiapan intensif GMST, AcEPT, & Interview spesialis lulus FK & Non-FK. Guru datang ke rumah wilayah ${kota.kota} atau Online. Master Teacher Expert & drilling soal terbaru. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel iup ugm ${kota.kota}, les privat iup ugm ${kota.kota}, persiapan gmst ${kota.kota}, pelatihan acept ugm, bimbel iup kedokteran, guru privat iup ugm, Bimbel LPS`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-privat-iup-ugm/${kota.slug}`}
        />

        {/* Open Graph (WhatsApp Preview Premium) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat IUP UGM di ${kota.kota} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi International Undergraduate Program (IUP) UGM melalui bimbingan spesialis di ${kota.kota}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-privat-iup-ugm/${kota.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Memberikan identitas 'EducationalOrganization' lokal agar Google memprioritaskan ranking kota */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat IUP UGM Edumatrix ${kota.kota}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbel-privat-iup-ugm/${kota.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan International Undergraduate Program (IUP) UGM untuk wilayah ${kota.kota}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Privat IUP UGM di {kota.kota} Terbaik - Intensif Privat IUP UGM
          FK dan Non FK
        </h1>
        <p className="desk-seo-lps">
          Bimbel Privat IUP UGM {kota.kota} Terbaik. Fokus Les Intensif IUP UGM
          Kedokteran dan Non FK, Belajar All Subtest, Master Teacher
          Berpengalaman, Jadwal Fleksibel, CS Responsif, Konsultasi Progress
          Belajar
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
      <ListKabHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaIupUgm;
