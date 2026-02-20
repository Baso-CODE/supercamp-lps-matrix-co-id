import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ListKecLps = () => {
  const [kecamatan, setKecamatan] = useState([]);

  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKecamatan(id);
  }, []);

  const fetchKecamatan = () => {
    fetch(`https://apilps.edusmart-indonesia.com/kecamatan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKecamatan(data);
      });
  };

  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kecamatan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/guru-privat-supercamp-utbk-snbt/${item.slug}`}>
            {item.kecamatan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKecLps;
