import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListKelLps = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const { kecSlug } = useParams();

  useEffect(() => {
    const fetchKelurahan = () => {
      fetch(`https://apilps.edusmart-indonesia.com/kelurahan/${kecSlug}`)
        .then((res) => res.json())
        .then((data) => {
          setKelurahan(data);
        });
    };
    fetchKelurahan();
  }, [kecSlug]);

  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kelurahan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/bimbingan-privat-supercamp-utbk-snbt/${item.slug}`}>
            {item.kelurahan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKelLps;
