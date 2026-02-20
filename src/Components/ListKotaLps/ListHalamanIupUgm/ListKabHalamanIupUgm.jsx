import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListKabHalamanIupUgm = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchKabupaten = () => {
      fetch(`https://apilps.edusmart-indonesia.com/ibukotakab/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setKabupaten(data);
        });
    };
    fetchKabupaten();
  }, [id]);
  return (
    <div className="container-all-tab-lps">
      <h2 className="title-jangkauan-daerah">Jangkauan Seluruh Indonesia</h2>
      <div className="parent-list-kota-lps">
        {kabupaten.map((item, index) => (
          <Link
            to={`/les-privat-iup-ugm/${item.slug}`}
            className="btn-kota"
            key={index}>
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabHalamanIupUgm;
