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
        <meta
          charSet="utf-8"
          name="description"
          content={`Les Privat UM UGM CBT ${kabupaten.kota_kabupaten} Terbaik. Les
          Privat UTUL UGM Saintek Soshum IPC, Master Teacher Berpengalaman,
          Drilling Soal UTUL, Privat Offline Online, Jadwal Fleksibel,
          Konsultasi Progress Belajar`}
        />
        <title>
          Les Privat UM UGM CBT {`${kabupaten.kota_kabupaten}`} Terbaik Bimbel
          Privat Intensif Masuk UGM
        </title>
        <link
          rel="canonical"
          href={`
https://supercampmatrix.com/bimbel-privat-cbt-ugm/${kabupaten.slug}`}
        />
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
