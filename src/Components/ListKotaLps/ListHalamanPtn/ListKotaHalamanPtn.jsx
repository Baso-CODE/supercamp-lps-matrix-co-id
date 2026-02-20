import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../Tab";
import "../Tab.css";

const ListKotaHalamanPtn = () => {
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
      <h2 className="title-jangkauan-daerah">Jangkauan Seluruh Indonesia</h2>
      <Tab title="WILAYAH">
        <div className="parent-list-kota-lps">
          {kota.map((item, index) => (
            <Link
              // to={`/les-privat-di-kota/${item.kota.toLowerCase()}?data=${
              //   item.id
              // }`}
              className="btn-kota"
              key={index}
              onClick={() => {
                window.location.href = `/les-privat-masuk-ptn/${item.slug}`;
              }}>
              {item.kota}
            </Link>
          ))}
        </div>
      </Tab>
    </div>
  );
};

export default ListKotaHalamanPtn;
