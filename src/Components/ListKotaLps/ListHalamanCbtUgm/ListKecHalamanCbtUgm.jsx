import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListKecHalamanCbtUgm = () => {
  const [kecamatan, setKecamatan] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchKecamatan = () => {
      fetch(`https://apilps.edusmart-indonesia.com/kecamatan/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setKecamatan(data);
        });
    };
    fetchKecamatan();
  }, [id]);

  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kecamatan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/bimbingan-privat-cbt-ugm/${item.slug}`}>
            {item.kecamatan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKecHalamanCbtUgm;
