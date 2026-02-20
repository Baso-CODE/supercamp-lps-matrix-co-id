import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKelHalamanSimakUi = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const { id, kecSlug } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKelurahan(id);
  }, []);

  const fetchKelurahan = () => {
    fetch(`https://apilps.edusmart-indonesia.com/kelurahan/${kecSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setKelurahan(data);
      });
  };
  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kelurahan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/guru-les-privat-simak-ui/${item.slug}`}
          >
            {item.kelurahan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKelHalamanSimakUi;
