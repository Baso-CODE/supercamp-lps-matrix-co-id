import "./KerjasamaHotel.css";

const KerjasamaHotel = () => {
  return (
    <div className="partnership-section-lps">
      <div className="partnership-card">
        <h2 className="partnership-title">Bekerjasama Dengan</h2>

        <div className="partnership-logos">
          {/* Logo 1 */}
          <div className="logo-wrapper">
            <img
              src={"/images/kerjasama/Hotel_UGM.webp"}
              alt="Hotel MM UGM Jogja"
              className="partner-logo"
            />
          </div>

          {/* Logo 2 */}
          <div className="logo-wrapper">
            <img
              src={"/images/kerjasama/dave_logo.png"}
              alt="Dave Apartment Depok"
              className="partner-logo"
            />
          </div>

          <div className="logo-wrapper">
            <img
              src={"/images/kerjasama/goenakan-indonesia.png"}
              alt="Dave Apartment Depok"
              className="partner-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KerjasamaHotel;
