import React from "react";
import lulusanLps from "../../assets/Supercamp/lulusan/lulusan.webp";
import "./LulusanLPS.css";

const LulusanLps = () => {
  return (
    <React.Fragment>
      <div className="box-lulusan-lps">
        <img
          src={lulusanLps}
          alt="UI ITB UGM IPB Unair ITS Undip Unpad & Perguruan Tinggi Negeri Favorit"
          className="img-lulusan-lps"
        />
      </div>
    </React.Fragment>
  );
};

export default LulusanLps;
