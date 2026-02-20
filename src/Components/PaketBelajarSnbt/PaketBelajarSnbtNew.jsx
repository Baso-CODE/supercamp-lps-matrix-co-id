import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PaketBelajarSnbtNew.css";

const PaketBelajarSnbtNew = () => {
  return (
    <React.Fragment>
      <div className="top-parent-paket-snbt-new">
        <h1 className="title-paket-snbt-new">
          Selain Program Supercamp di Atas <br /> Tersedia Juga Program Privat
        </h1>
        <p className="desk-main-paket-snbt-new">
          Bisa Datang ke Rumah atau Online
        </p>
        {/* <div className="super-parent-paket-snbt-new"> */}
        <div className="parent-paket-snbt-new">
          <div className="child-paket-snbt-new">
            <p className="text-paket-privat-lps">PAKET PRIVAT</p>
            <h1 className="child-title-paket-snbt-new">SILVER</h1>
            <p className="child-subtitle-paket-snbt-new">Paket 20 sesi</p>
            <hr className="garis-paket-snbt-new" />
            <ul className="parent-rincian-paket">
              <li className="rincian-paket">
                <FontAwesomeIcon className="color-check" icon={faCheck} /> Free
                Assessment
              </li>
              <li className="rincian-paket">
                <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                Konsultasi
              </li>
              <li className="rincian-paket">
                <FontAwesomeIcon className="color-check" icon={faCheck} /> Modul
                Belajar
              </li>
              <li className="rincian-paket">
                <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                Tryout Online
              </li>
              <li className="rincian-paket">
                <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                Progress Report
              </li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20Paket%20SILVER%20bimbel%20UTBK%20SNBT.">
              <button className="btn-parent-paket-snbt-new-2">
                Pilih Paket
              </button>
            </a>
          </div>
          <div className="parent-special-label-paket-snbt-maxima">
            <h3 className="special-label-paket-snbt-maxima">PROGRAM FAVORIT</h3>
            <div className="child-paket-snbt-new-maxima">
              <p className="text-paket-privat-lps">PAKET PRIVAT</p>
              <h1 className="child-title-paket-snbt-new">GOLD</h1>
              <p className="child-subtitle-paket-snbt-new-gold">
                Paket 40 sesi
              </p>
              <hr className="garis-paket-snbt-new" />
              <ul className="parent-rincian-paket">
                <ul className="parent-rincian-paket">
                  <li className="rincian-paket">
                    <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li className="rincian-paket">
                    <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                    Konsultasi
                  </li>
                  <li className="rincian-paket">
                    <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                    Modul Belajar
                  </li>
                  <li className="rincian-paket">
                    <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                    Tryout Online
                  </li>
                  <li className="rincian-paket">
                    <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                    Progress Report
                  </li>
                </ul>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=6282258689993&text=Halo%20Kak%20Nia%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20Paket%20GOLD%20bimbel%20UTBK%20SNBT.">
                <button className="btn-parent-paket-snbt-new">
                  Pilih Paket
                </button>
              </a>
            </div>
          </div>
          <div className="child-paket-snbt-new">
            <p className="text-paket-privat-lps">PAKET PRIVAT</p>
            <h1 className="child-title-paket-snbt-new">PLATINUM</h1>
            <p className="child-subtitle-paket-snbt-new-platinum">
              Paket 60 sesi
            </p>
            <hr className="garis-paket-snbt-new" />
            <ul className="parent-rincian-paket">
              <ul className="parent-rincian-paket">
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Free Assessment
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Konsultasi
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Modul Belajar
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Tryout Online
                </li>
                <li className="rincian-paket">
                  <FontAwesomeIcon className="color-check" icon={faCheck} />{" "}
                  Progress Report
                </li>
              </ul>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6282134093567&text=Halo%20Kak%20Lia%20https://supercampmatrix.com	,%20Saya%20ingin%20daftar%20Paket%20PLATINUM%20bimbel%20UTBK%20SNBT.">
              <button className="btn-parent-paket-snbt-new-2">
                Pilih Paket
              </button>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default PaketBelajarSnbtNew;
