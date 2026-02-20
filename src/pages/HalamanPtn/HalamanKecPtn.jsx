import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const HalamanKecPtn = () => {
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
        <meta
          charSet="utf-8"
          name="description"
          content={`Bimbel Masuk PTN ${kecamatan.kecamatan} Terbaik Berpengalaman. Intensif Privat Sukses Masuk
          PTN, Modul UTBK SNBT Lengkap, Tryout UTBK Online, Konsultasi Jurusan
          dan PTN, Privat Semua Subtes UTBK, Report Progress`}
        />
        <title>
          Bimbel Masuk PTN {`${kecamatan.kecamatan}`} Program Intensif Privat
          UTBK SNBT Spesialis Masuk PTN
        </title>
        <link
          rel="canonical"
          href={`
https://supercampmatrix.com/bimbingan-masuk-ptn/${kecamatan.slug}`}
        />
      </Helmet>
      <NavbarLps />
      <JumbotronLps />
      <div className="parent-text-seo-lps">
        <h1 className="text-seo-lps">
          Bimbel Masuk PTN di {kecamatan.kecamatan} - Bimbel Les Privat dan
          Supercamp - Masuk FK & PTN
        </h1>
        <p className="desk-seo-lps">
          Bimbel Masuk PTN Terbaik Berpengalaman. Intensif Privat Sukses Masuk
          PTN, Modul UTBK SNBT Lengkap, Tryout UTBK Online, Konsultasi Jurusan
          dan PTN, Privat Semua Subtes UTBK, Report Progress
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
      <ListKelHalamanPtn />
      <FaqScLps />
      <BottomCtaLps />
      <Footer />
      <Floatingcta />
    </React.Fragment>
  );
};

export default HalamanKecPtn;
