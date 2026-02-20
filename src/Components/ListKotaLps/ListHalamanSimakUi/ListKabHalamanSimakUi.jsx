import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ListKabHalamanSimakUi = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKabupaten(id);
  }, []);

  const fetchKabupaten = () => {
    fetch(`https://apilps.edusmart-indonesia.com/ibukotakab/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKabupaten(data);
      });
  };
  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kabupaten.map((item, index) => (
          <Link
            to={`/bimbel-privat-simak-ui/${item.slug}`}
            className="btn-kota"
            key={index}
          >
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabHalamanSimakUi;
