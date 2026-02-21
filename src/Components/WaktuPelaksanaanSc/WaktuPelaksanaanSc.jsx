import React from "react";
import "./WaktuPelaksanaanSc.css";

const WaktuPelaksanaanSc = () => {
  return (
    <React.Fragment>
      <div className="superparent-waktu-pelaksanaan-sc">
        <div className="text-waktu-pelaksanaa">
          <span className="text-pelaksanaan-with-bg">
            Pelaksanaan UTBK 23 April 2026
          </span>
          <h1 className="title-pelaksanaan-sc">
            Tersisa 15 Kursi Lagi, <br /> untuk Program Supercamp{" "}
            <br className="break-title-pelaksanaan-sc" /> Booking Sekarang Juga!
          </h1>
          <p className="desk-pelaksanaan-sc">
            Waktu terbatas! 15 kursi terakhir untuk meraih kesuksesan! Booking
            sekarang dan <br className="break-desk-pelaksanaan-sc" /> wujudkan
            impian Anda! Jangan lewatkan kesempatan emas ini!
          </p>
        </div>
        <img
          src="/images/icon-waktu-pelaksanaan.webp"
          alt="Supercamp SNBT"
          className="img-waktu-pelaksanaan"
        />
      </div>
    </React.Fragment>
  );
};

export default WaktuPelaksanaanSc;
