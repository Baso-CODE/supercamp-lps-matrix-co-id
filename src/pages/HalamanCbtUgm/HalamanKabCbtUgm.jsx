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
import ListKecHalamanCbtUgm from "../../Components/ListKotaLps/ListHalamanCbtUgm/ListKecHalamanCbtUgm";
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

const HalamanKabCbtUgm = () => {
  const { id } = useParams();
  const [kabupaten, setKabupaten] = useState([]);
  const axiosJWT = useMemo(() => axios.create(), []);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  useEffect(() => {
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
  }, [id, query, axiosJWT]);
  return (
    <>
      <Helmet>
        {/* Fix Title: String tunggal di dalam kurung kurawal untuk mencegah error React Helmet */}
        <title>{`Bimbel & Les Privat CBT UGM ${kabupaten.kota_kabupaten} 2026 - Lolos UGM #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Menggabungkan Bimbel & Les Privat + Target CBT/UTUL UGM + Lokasi Spesifik */}
        <meta
          name="description"
          content={`Bimbel & Les Privat CBT UGM terbaik di ${kabupaten.kota_kabupaten}. Persiapan intensif UTUL UGM 2026 Saintek & Soshum. Master Teacher berpengalaman, drilling soal prediksi, & guru datang ke rumah di ${kabupaten.kota_kabupaten}. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel cbt ugm ${kabupaten.kota_kabupaten}, les privat cbt ugm ${kabupaten.kota_kabupaten}, bimbingan belajar ugm ${kabupaten.kota_kabupaten}, persiapan utul ugm, guru privat ke rumah ${kabupaten.kota_kabupaten}, Bimbel LPS`}
        />

        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/bimbel-privat-cbt-ugm/${kabupaten.slug}`}
        />

        {/* Open Graph (WhatsApp & Social Media Preview) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat CBT UGM di ${kabupaten.kota_kabupaten} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi Gadjah Mada melalui program spesialis Bimbel & Les Privat CBT UGM di wilayah ${kabupaten.kota_kabupaten}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/bimbel-privat-cbt-ugm/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Sangat penting untuk dominasi SEO Lokal Kabupaten */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat CBT UGM Edumatrix ${kabupaten.kota_kabupaten}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/bimbel-privat-cbt-ugm/${kabupaten.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kabupaten.kota_kabupaten,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan ujian mandiri CBT UGM (UTUL UGM) untuk wilayah ${kabupaten.kota_kabupaten}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat UM UGM CBT di {kabupaten.kota_kabupaten} Terbaik - Bimbel
          Privat Intensif Masuk UGM
        </h1>
        <p className="desk-seo-lps">
          Les Privat UM UGM CBT di {kabupaten.kota_kabupaten} Terbaik. Les
          Privat UTUL UGM Saintek Soshum IPC, Master Teacher Berpengalaman,
          Drilling Soal UTUL, Privat Offline Online, Jadwal Fleksibel,
          Konsultasi Progress Belajar
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
      <ListKecHalamanCbtUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKabCbtUgm;
