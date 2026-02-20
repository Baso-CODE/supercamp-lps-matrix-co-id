import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Floatingcta.css";

const Floatingcta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  return (
    <div className="whatsapp-container">
      {/* Modal untuk memilih customer service */}
      {isModalOpen && (
        <div className={`modal ${isClosing ? "fade-down" : ""}`}>
          <div className="modal-content">
            <div className="parent-title-modal">
              <h3 className="text-pilih-cs">Pilih Customer Service</h3>
              <FontAwesomeIcon
                className="close"
                onClick={closeModal}
                icon={faClose}
              />
            </div>

            <ul className="service-list">
              {/* Fina */}
              <a href="https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20bimbel%20Supercamp%20UTBK%20SNBT">
                <li className="service-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt="Bimbel Masuk PTN"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Fina - 0813-1177-8441
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </li>
              </a>

              {/* Nia */}
              <a href="https://api.whatsapp.com/send?phone=6282258689993&text=Halo%20Kak%20Nia%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20bimbel%20Supercamp%20UTBK%20SNBT">
                <li className="service-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt="Bimbel Masuk PTN"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Nia - 0822-5868-9993
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </li>
              </a>

              {/* Lia */}
              <a href="https://api.whatsapp.com/send?phone=6282134093567&text=Halo%20Kak%20Lia%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20bimbel%20Supercamp%20UTBK%20SNBT">
                <li className="service-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt="Bimbel Masuk PTN"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Lia - 0821-3409-3567
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="main-parent-float-wa">
        <label className="label-cta" htmlFor="">
          Konsultasi Sekarang!
        </label>
        <div className="whatsapp-float">
          <button className="whatsapp-btn" onClick={openModal}>
            <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
            <span className="whatsapp-badge">1</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingcta;
