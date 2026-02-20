import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListKabHalamanSimakUi = () => {
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
      <div className="parent-list-kota-lps">
        {kabupaten.map((item, index) => (
          <Link
            to={`/bimbel-privat-simak-ui/${item.slug}`}
            className="btn-kota"
            key={index}>
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabHalamanSimakUi;
