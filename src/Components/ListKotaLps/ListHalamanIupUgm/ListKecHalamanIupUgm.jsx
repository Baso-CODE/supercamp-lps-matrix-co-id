import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListKecHalamanIupUgm = () => {
  const [kecamatan, setKecamatan] = useState([]);

  const { id } = useParams();

  const fetchKecamatan = useCallback(() => {
    fetch(`https://apilps.edusmart-indonesia.com/kecamatan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKecamatan(data);
      });
  }, [id]);
  useEffect(() => {
    fetchKecamatan();
  }, [fetchKecamatan]);

  return (
    <div className="container-all-tab-lps">
      <div className="parent-list-kota-lps">
        {kecamatan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/bimbel-les-privat-iup-ugm/${item.slug}`}>
            {item.kecamatan}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKecHalamanIupUgm;
