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
import ListKecHalamanPtn from "../../Components/ListKotaLps/ListHalamanPtn/ListKecHalamanPtn";
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

const HalamanKabPtn = () => {
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
        {/* Perbaikan Title: Menggunakan satu string utuh di dalam kurung kurawal agar tidak error */}
        <title>{`Bimbel & Les Privat UTBK SNBT ${kabupaten.kota_kabupaten} 2026 - Lolos PTN #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Menggabungkan Bimbel & Les Privat + Lokasi Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat UTBK SNBT di ${kabupaten.kota_kabupaten} terbaik. Spesialis persiapan masuk Kedokteran, UI, UGM, ITB, & UNDIP. Guru datang ke rumah atau Online. Master Teacher berpengalaman & Modul Akurat. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel les privat ${kabupaten.kota_kabupaten}, bimbel ptn ${kabupaten.kota_kabupaten}, les privat kedokteran ${kabupaten.kota_kabupaten}, bimbingan belajar ${kabupaten.kota_kabupaten}, guru privat ke rumah ${kabupaten.kota_kabupaten}, karantina ui ugm`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-les-privat-masuk-ptn/${kabupaten.slug}`}
        />

        {/* Open Graph untuk Preview WhatsApp yang menarik */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat di ${kabupaten.kota_kabupaten} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi PTN Impian bersama spesialis Bimbel & Les Privat di ${kabupaten.kota_kabupaten}. Program intensif Kedokteran 2026.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-les-privat-masuk-ptn/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD untuk mempermudah Google indexing lokasi */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Edumatrix ${kabupaten.kota_kabupaten}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbel-les-privat-masuk-ptn/${kabupaten.slug}`,
            telephone: "+6282258689993",
            address: {
              "@type": "PostalAddress",
              addressLocality: kabupaten.kota_kabupaten,
              addressCountry: "ID",
            },
            description: `Lembaga bimbingan belajar dan les privat persiapan masuk PTN dan Kedokteran unggulan di ${kabupaten.kota_kabupaten}.`,
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat UTBK SNBT di {kabupaten.kota_kabupaten} - Spesialis Masuk
          PTN
        </h1>
        <p className="desk-seo-lps">
          Les Privat Masuk PTN di {kabupaten.kota_kabupaten} Terbaik
          Berpengalaman. Intensif Privat Sukses Masuk PTN, Modul UTBK SNBT
          Lengkap, Tryout UTBK Online, Konsultasi Jurusan dan PTN, Privat Semua
          Subtes UTBK, Report Progress
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
      <ListKecHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabPtn;
