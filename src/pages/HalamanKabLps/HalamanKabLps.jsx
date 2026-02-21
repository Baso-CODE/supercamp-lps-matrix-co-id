import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
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
import ListKecLps from "../../Components/ListKotaLps/ListKecLps";
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

const HalamanKabLps = () => {
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
    <React.Fragment>
      <Helmet>
        {/* 1. Basic SEO - Judul mengandung Brand & Lokasi di awal (Primary Keyword) */}
        <title>
          Les Privat UTBK SNBT {kabupaten.kota_kabupaten} 2026 - Bimbel
          Kedokteran #1
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* 2. Meta Description - Mengandung Call to Action (CTA) untuk meningkatkan CTR */}
        <meta
          name="description"
          content={`Les Privat UTBK SNBT di ${kabupaten.kota_kabupaten} terbaik. Persiapan intensif masuk Kedokteran, UI, UGM, ITB, & UNDIP. Guru ke rumah atau Online. Garansi Master Teacher berpengalaman. Daftar sekarang!`}
        />
        <meta
          name="keywords"
          content={`les privat utbk snbt ${kabupaten.kota_kabupaten}, bimbel ptn ${kabupaten.kota_kabupaten}, bimbel kedokteran ${kabupaten.kota_kabupaten}, simak ui ${kabupaten.kota_kabupaten}, cbt ugm ${kabupaten.kota_kabupaten}, guru privat datang ke rumah ${kabupaten.kota_kabupaten}`}
        />

        {/* 3. Canonical Link - Menghindari Duplikasi Konten */}
        <link
          rel="canonical"
          href={`https://supercampui.com/les-privat-supercamp-utbk-snbt/${kabupaten.slug}`}
        />

        {/* 4. Open Graph (Untuk WhatsApp & Social Media) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel Les Privat UTBK SNBT di ${kabupaten.kota_kabupaten} - Lolos PTN Favorit`}
        />
        <meta
          property="og:description"
          content={`Dapatkan pendampingan belajar intensif di ${kabupaten.kota_kabupaten}. Program khusus Kedokteran & PTN Unggulan.`}
        />
        <meta
          property="og:url"
          content={`https://supercampui.com/les-privat-supercamp-utbk-snbt/${kabupaten.slug}`}
        />
        <meta
          property="og:image"
          content="https://supercampmatrix/images/banner.webp"
        />

        {/* 5. Schema Markup (JSON-LD) - Kunci Halaman 1 */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Les Privat UTBK SNBT",
              provider: {
                "@type": "EducationalOrganization",
                name: "Bimbel LPS",
                url: "https://supercampmatrix.com",
              },
              areaServed: {
                "@type": "City",
                name: kabupaten.kota_kabupaten,
              },
              description: `Bimbingan belajar les privat persiapan UTBK SNBT, SIMAK UI, dan CBT UGM di ${kabupaten.kota_kabupaten}.`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: `Apakah ada layanan guru datang ke rumah di ${kabupaten.kota_kabupaten}?`,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: `Ya, Edumatrix menyediakan layanan guru les privat datang ke rumah untuk wilayah ${kabupaten.kota_kabupaten} dan sekitarnya.`,
                  },
                },
                {
                  "@type": "Question",
                  name: "Program apa saja yang tersedia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kami fokus pada persiapan masuk Fakultas Kedokteran dan PTN favorit melalui jalur UTBK SNBT, SIMAK UI, dan CBT UGM.",
                  },
                },
              ],
            },
          ])}
        </script>
      </Helmet>
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Les Privat UTBK SNBT di {kabupaten.kota_kabupaten} - Bimbingan Masuk
          PTN dan Kedokteran
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
      <ListKecLps />
      <FaqScLps />
      <BottomCtaLps />
    </React.Fragment>
  );
};

export default HalamanKabLps;
