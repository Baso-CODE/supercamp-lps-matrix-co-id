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
import ListKelHalamanIupUgm from "../../Components/ListKotaLps/ListHalamanIupUgm/ListKelHalamanIupUgm";
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

const HalamanKecIupUgm = () => {
  const { id, kecSlug } = useParams();
  const [kecamatan, setKecamatan] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    const getKecamatan = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/kecamatankab/${kecSlug}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKecamatan(response.data);
    };
    getKecamatan(id);
  }, [id, query, axiosJWT, kecSlug]);
  return (
    <>
      <Helmet>
        {/* Perbaikan Title: Menggunakan satu string utuh agar aman dari error Helmet */}
        <title>{`Bimbel & Les Privat IUP UGM ${kecamatan.kecamatan} 2026 - Lolos Intake #1`}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description: Hybrid Keyword + Target Teknis (GMST/AcEPT) + Lokasi Kecamatan */}
        <meta
          name="description"
          content={`Bimbel & Les Privat IUP UGM terbaik di ${kecamatan.kecamatan}. Persiapan intensif GMST, AcEPT, & Interview spesialis lulus FK & Non-FK. Master Teacher datang ke rumah wilayah ${kecamatan.kecamatan}. Program Intake 1, 2, & 3. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel iup ugm ${kecamatan.kecamatan}, les privat iup ugm ${kecamatan.kecamatan}, persiapan gmst ${kecamatan.kecamatan}, pelatihan acept ugm, bimbel iup kedokteran, guru privat iup ugm, Bimbel LPS`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbel-les-privat-iup-ugm/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp Preview Premium) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat IUP UGM di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content={`Raih kursi International Undergraduate Program (IUP) UGM melalui bimbingan spesialis di ${kecamatan.kecamatan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbel-les-privat-iup-ugm/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD: Spek Tinggi untuk dominasi Google Maps & Search Lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat IUP UGM Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbel-les-privat-iup-ugm/${kecamatan.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat spesialis persiapan International Undergraduate Program (IUP) UGM untuk wilayah ${kecamatan.kecamatan}.`,
          })}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel & Les Privat IUP UGM di {kecamatan.kecamatan} Terbaik -
          Intensif Privat IUP UGM FK dan Non FK
        </h1>
        <p className="desk-seo-lps">
          Bimbel & Les Privat IUP UGM Terbaik. Fokus Les Intensif IUP UGM
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
      <ListKelHalamanIupUgm />
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKecIupUgm;
