import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../ListKotaLps/Tab";

const ListKotaHalamanSimakUi = () => {
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
                window.location.href = `/les-privat-simak-ui/${item.slug}`;
              }}>
              {item.kota}
            </Link>
          ))}
        </div>
      </Tab>
    </div>
  );
};

export default ListKotaHalamanSimakUi;
