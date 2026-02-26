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
      {isModalOpen && (
        <div
          className={`modal ${isClosing ? "fade-down" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title">
          <div className="modal-content">
            <div className="parent-title-modal">
              <h3 id="modal-title" className="text-pilih-cs">
                Pilih Customer Service
              </h3>

              <button
                type="button"
                className="close"
                onClick={closeModal}
                aria-label="Tutup pilihan customer service">
                <FontAwesomeIcon icon={faClose} aria-hidden="true" />
              </button>
            </div>

            <ul className="service-list">
              <li className="service-item">
                <a
                  href="https://wa.me/6281311778441?text=Halo%20Kak%20Fina,%20Saya%20ingin%20daftar%20Supercamp%20UTBK%20SNBT"
                  aria-label="Chat WhatsApp Kak Fina, customer service Supercamp Matrix">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt=""
                    aria-hidden="true"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Fina - 0813-1177-8441
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </a>
              </li>

              <li className="service-item">
                <a
                  href="https://wa.me/6282258689993?text=Halo%20Kak%20Nia,%20Saya%20ingin%20daftar%20Supercamp%20UTBK%20SNBT"
                  aria-label="Chat WhatsApp Kak Nia, customer service Supercamp Matrix">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt=""
                    aria-hidden="true"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Nia - 0822-5868-9993
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </a>
              </li>

              <li className="service-item">
                <a
                  href="https://wa.me/6282134093567?text=Halo%20Kak%20Lia,%20Saya%20ingin%20daftar%20Supercamp%20UTBK%20SNBT"
                  aria-label="Chat WhatsApp Kak Lia, customer service Supercamp Matrix">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721"
                    alt=""
                    aria-hidden="true"
                    className="img-float-wa"
                  />
                  <p className="service-link">
                    Kak Lia - 0821-3409-3567
                    <br />
                    <span className="text-cs-edm">(CS Supercamp Matrix)</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="main-parent-float-wa">
        <label className="label-cta">Konsultasi Sekarang!</label>

        <div className="whatsapp-float">
          <button
            type="button"
            className="whatsapp-btn"
            onClick={openModal}
            aria-label="Buka pilihan customer service WhatsApp">
            <FontAwesomeIcon
              className="icon-wa"
              icon={faWhatsapp}
              aria-hidden="true"
            />
            <span className="whatsapp-badge" aria-label="Satu notifikasi">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Floatingcta;
