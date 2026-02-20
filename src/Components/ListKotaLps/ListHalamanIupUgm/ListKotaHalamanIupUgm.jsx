import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../Tab";
import "../Tab.css";

const ListKotaHalamanIupUgm = () => {
  const [kota, setKota] = useState([]);

  const fetchKota = () => {
    fetch("https://apilps.edusmart-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKota(data.data);
      });
  };
  useEffect(() => {
    fetchKota();
  }, []);
  return (
    <div className="container-all-tab-lps">
      <h1 className="title-jangkauan-daerah">Jangkauan Seluruh Indonesia</h1>
      <Tab title="WILAYAH">
        <div className="parent-list-kota-lps">
          {kota.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              onClick={() => {
                window.location.href = `/bimbel-privat-iup-ugm/${item.slug}`;
              }}>
              {item.kota}
            </Link>
          ))}
        </div>
      </Tab>
    </div>
  );
};

export default ListKotaHalamanIupUgm;
