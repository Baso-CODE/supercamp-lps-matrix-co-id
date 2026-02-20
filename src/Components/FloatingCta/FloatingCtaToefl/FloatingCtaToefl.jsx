import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import "../../Translator/i18n";

const FloatingCtaToefl = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <a
          className="parent-btn-wa"
          href={t("text.ctaUmum")}
        >
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default FloatingCtaToefl;
