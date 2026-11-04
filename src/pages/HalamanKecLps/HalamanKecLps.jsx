import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
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
import ListKelLps from "../../Components/ListKotaLps/ListKelLps";
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

const HalamanKecLps = () => {
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
    <React.Fragment>
      <Helmet>
        <title>
          Bimbel & Les Privat {kecamatan.kecamatan} 2026 - Supercamp Karantina
          PTN
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Description - Padat Kata Kunci (Bimbel, Les Privat, Supercamp, Lokasi) */}
        <meta
          name="description"
          content={`Bimbel & Les Privat terbaik di ${kecamatan.kecamatan} untuk persiapan UTBK SNBT 2026. Program Supercamp Karantina Kedokteran UI, UGM, ITB. Guru privat datang ke rumah atau Online. Raih PTN impian Anda sekarang!`}
        />
        <meta
          name="keywords"
          content={`bimbel les privat ${kecamatan.kecamatan}, bimbel ptn ${kecamatan.kecamatan}, les privat kedokteran ${kecamatan.kecamatan}, bimbingan belajar ${kecamatan.kecamatan}, supercamp matrix ${kecamatan.kecamatan}, karantina ptn 2026`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://supercampmatrix.co.id/guru-privat-supercamp-utbk-snbt/${kecamatan.slug}`}
        />

        {/* Open Graph (WhatsApp/FB Sharing) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel & Les Privat di ${kecamatan.kecamatan} - Bimbel LPS`}
        />
        <meta
          property="og:description"
          content="Gabungan program Bimbel & Les Privat terbaik untuk sukses masuk Kedokteran & PTN Favorit."
        />
        <meta
          property="og:url"
          content={`https://supercampmatrix.co.id/guru-privat-supercamp-utbk-snbt/${kecamatan.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix.co.id/images/banner.webp"
        />

        {/* Schema Markup JSON-LD (Updated for Hybrid Keywords) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Bimbel & Les Privat Edumatrix ${kecamatan.kecamatan}`,
            image: "https://supercampmatrix.co.id/images/banner.webp",
            url: `https://supercampmatrix.co.id/guru-privat-supercamp-utbk-snbt/${kecamatan.slug}`,
            telephone: "+6282258689993",
            address: {
              "@type": "PostalAddress",
              addressLocality: kecamatan.kecamatan,
              addressCountry: "ID",
            },
            description: `Lembaga Bimbel dan Les Privat terbaik di wilayah ${kecamatan.kecamatan} khusus persiapan masuk Fakultas Kedokteran dan PTN unggulan melalui program Supercamp Karantina.`,
          })}
        </script>
      </Helmet>

      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Masuk PTN di {kecamatan.kecamatan} - Bimbel Les Privat dan
          Supercamp - Masuk FK & PTN
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
      <ListKelLps />
      <FaqScLps />
      <BottomCtaLps />
    </React.Fragment>
  );
};

export default HalamanKecLps;
