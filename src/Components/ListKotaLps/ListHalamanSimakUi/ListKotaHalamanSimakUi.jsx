import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../Tab";
import "../Tab.css";

const ListKotaHalamanSimakUi = () => {
  const [kota, setKota] = useState([]);

  useEffect(() => {
    fetchKota();
  }, []);

  const fetchKota = () => {
    fetch("https://apilps.edusmart-indonesia.com/kota")
      .then((res) => res.json())
      .then((data) => {
        setKota(data.data);
      });
  };
  return (
    <div className="container-all-tab-lps">
      <h1 className="title-jangkauan-daerah">Jangkauan Seluruh Indonesia</h1>
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
                window.location.href = `/les-privat-simak-ui/${item.slug}`;
              }}
            >
              {item.kota}
            </Link>
          ))}
        </div>
      </Tab>
    </div>
  );
};

export default ListKotaHalamanSimakUi;
