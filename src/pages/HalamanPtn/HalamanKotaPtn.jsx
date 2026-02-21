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
import ListKabHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKabHalamanPtn";
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

const HalamanKotaPtn = () => {
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
        {/* Perbaikan Title: Masukkan variabel ke dalam template literal di dalam kurung kurawal */}
        <title>{`Bimbel & Les Privat Masuk PTN ${kota.kota} 2026 - Lolos Kedokteran #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Bimbel & Les Privat Masuk PTN terbaik di ${kota.kota}. Program intensif UTBK SNBT, SIMAK UI, & CBT UGM 2026. Spesialis tembus Kedokteran & PTN Favorit.`}
        />
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/bimbel-masuk-ptn/${kota.slug}`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`Bimbel & Les Privat Masuk PTN di ${kota.kota} - Bimbel LPS`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Script JSON-LD juga harus dibungkus aman */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Edumatrix ${kota.kota}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kota.kota,
              addressCountry: "ID",
            },
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Masuk PTN di {kota.kota} - Program Intensif Privat UTBK SNBT
          Spesialis Masuk PTN
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk PTN di {kota.kota} Terbaik Berpengalaman. Intensif Privat
          Sukses Masuk PTN, Modul UTBK SNBT Lengkap, Tryout UTBK Online,
          Konsultasi Jurusan dan PTN, Privat Semua Subtes UTBK, Report Progress
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
      <ListKabHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKotaPtn;
