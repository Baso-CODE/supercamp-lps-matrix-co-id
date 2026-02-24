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

const HalamanKelLps = () => {
  const { kelSlug } = useParams();
  const [kelurahan, setKelurahan] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  useEffect(() => {
    const axiosJWT = axios.create();
    const getKelurahan = async () => {
      const response = await axiosJWT.get(
        `https://apilps.edusmart-indonesia.com/kelurahankec/${kelSlug}`,
        {
          headers: {
            Authorization: `Bearer`,
          },
        },
      );
      setKelurahan(response.data);
    };
    getKelurahan(kelSlug);
  }, [kelSlug, query]);

  return (
    <>
      <Helmet>
        {/* Basic SEO - Menggabungkan Bimbel & Les Privat di Level Kelurahan */}
        <title>
          Bimbel & Les Privat {kelurahan.kelurahan} 2026 - Supercamp Karantina
          PTN
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description - Mengandung Keyword Lokasi Kelurahan, Jalur Masuk, & CTA */}
        <meta
          name="description"
          content={`Bimbel & Les Privat di ${kelurahan.kelurahan} 2026. Persiapan intensif masuk Kedokteran, UI, UGM, & ITB via SIMAK UI, CBT UGM, & SNBT. Guru privat ke rumah atau online di wilayah ${kelurahan.kelurahan}. Daftar Sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel les privat ${kelurahan.kelurahan}, bimbel ptn ${kelurahan.kelurahan}, les privat kedokteran ${kelurahan.kelurahan}, guru privat ke rumah ${kelurahan.kelurahan}, karantina ptn ${kelurahan.kelurahan}, bimbingan belajar ${kelurahan.kelurahan}`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.com/bimbingan-privat-supercamp-utbk-snbt/${kelurahan.slug}`}
        />

        {/* Open Graph (Social Media & WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat di ${kelurahan.kelurahan} - Lolos PTN & Kedokteran`}
        />
        <meta
          property="og:description"
          content={`Program Bimbel & Les Privat terbaik untuk sukses masuk Kedokteran & PTN Favorit di wilayah ${kelurahan.kelurahan}.`}
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.com/bimbingan-privat-supercamp-utbk-snbt/${kelurahan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.com/images/banner.webp"
        />

        {/* Schema Markup JSON-LD - Sangat Kuat untuk SEO Lokal */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: `Bimbel & Les Privat Edumatrix ${kelurahan.kelurahan}`,
            image: "https://supercampmatrix.com/images/banner.webp",
            url: `https://supercampmatrix.com/bimbingan-privat-supercamp-utbk-snbt/${kelurahan.slug}`,
            telephone: "+6282258689993",
            address: {
              "@type": "PostalAddress",
              addressLocality: kelurahan.kelurahan,
              addressCountry: "ID",
            },
            description: `Pusat Bimbel dan Les Privat terbaik di kelurahan ${kelurahan.kelurahan} untuk bimbingan intensif masuk Fakultas Kedokteran dan PTN unggulan.`,
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Les Privat & Supercamp UTBK SNBT di {kelurahan.kelurahan}
        </h1>
        <p className="desk-seo-lps">
          Bimbel LPS adalah solusi terbaik untuk Anda yang membutuhkan layanan
          intensif privat persiapan UTBK SNBT dan Bimbel Karantina Masuk PTN &
          Kedokteran. Kami hadir untuk mendampingi Anda Sukses Masuk PTN Impian.
          Dengan pendampingan yang intensif dari master teacher berkompeten dan
          berpengalaman, setiap tahunnya ratusan siswa berhasil lolos masuk
          jurusan yang dicita-citakan.
          <br />
          <br />
          Bagi kami setiap siswa memiliki potensi belajarnya masing - masing
          yang dapat dikembangkan untuk kemudian bisa sukses meraih target
          jurusan dan PTN yang diinginkan. Kami percaya bahwa setiap siswa akan
          bisa membangkitkan potensi dan bakatnya dengan terus berlatih dan
          mendapat pendampingan belajar yang tepat serta maksimal. Bimbel LPS
          dengan layanan program yang sudah proven dan beragam pilihan paket
          belajar yang bisa dipilih siap menjadi pilihan terbaik Anda. Bersama
          Bimbel LPS - Sukses Raih PTN Impian.
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
      {/* <ListKabLps /> */}
      <FaqScLps />
      <BottomCtaLps />
    </>
  );
};

export default HalamanKelLps;
