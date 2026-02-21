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
import ListKabHalamanKedokteran from "../../Components/ListKotaLps/ListHalamanKedokteran/ListKabHalamanKedokteran";
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

const HalamanKotaKedokteran = () => {
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
        {/* Fix Title: Menggunakan template literal di dalam {} agar terbaca sebagai string tunggal */}
        <title>{`Bimbel & Les Privat Kedokteran ${kota.kota} 2026 - Lolos PTN #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Padat kata kunci utama & lokasi untuk menggaet traffic lokal */}
        <meta
          name="description"
          content={`Bimbel & Les Privat khusus masuk Kedokteran di ${kota.kota}. Program Supercamp Karantina lulus FK UI, UGM, UNAIR, UNPAD. Master Teacher expert, modul akurat, & sesi intensif. Daftar sekarang di Edumatrix!`}
        />
        <meta
          name="keywords"
          content={`bimbel kedokteran ${kota.kota}, les privat kedokteran ${kota.kota}, karantina fk ugm, karantina fk ui, bimbel masuk ptn ${kota.kota}, bimbingan belajar kedokteran`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampui.com/les-privat-masuk-kedokteran/${kota.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat Kedokteran di ${kota.kota} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Fakultas Kedokteran impian dengan program spesialis Bimbel & Les Privat di ${kota.kota}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampui.com/les-privat-masuk-kedokteran/${kota.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampui.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Memberikan identitas 'Local Business' agar Google memprioritaskan ranking lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Kedokteran Edumatrix ${kota.kota}`,
            image: "https://supercampui.com/images/banner.webp",
            url: `https://supercampui.com/les-privat-masuk-kedokteran/${kota.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan masuk Fakultas Kedokteran PTN Favorit untuk wilayah ${kota.kota}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Masuk Kedokteran di {kota.kota} Terbaik - Program Belajar Fokus
          Kedokteran UI dan PTN Favorit
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk Kedokteran di {kota.kota} Terbaik - Sesi Belajar Super
          Intensif, Konsultasi Progress, Master Teacher Expert Berpengalaman,
          Modul Belajar, Karantina Spesialis FK PTN UI UGM Unpad IPB
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
      <ListKabHalamanKedokteran />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaKedokteran;
