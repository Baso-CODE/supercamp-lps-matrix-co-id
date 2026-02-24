import "./TargetBelajarLps.css";

import iconLokasi from "../../assets/Supercamp/untungnya supercamp/icon_check.webp";
import modelTarget from "../../assets/new/model_target_bimbel_snbt.webp";

const TargetBelajarLps = () => {
  const targets = [
    "Implementasi model belajar berdasarkan mapping kebutuhan siswa",
    "Penguasaan strategi efektif UTBK SNBT, SIMAK UI, UTUL UGM, dan Ujian Mandiri PTN",
    "Memahami konsep dasar setiap materi secara mendalam",
    "Meningkatkan kecepatan dan ketepatan dalam mengerjakan soal",
    "Siswa siap menghadapi seluruh jalur seleksi masuk PTN favorit",
    "Meraih jurusan terbaik di Perguruan Tinggi Negeri yang diinginkan",
  ];

  return (
    <section className="parent-img-target-belajar-lps">
      <div className="child-box-target-belajar-sc-lps">
        <div className="parent-taget-pembelajaran-sc-lps">
          <h2 className="title-lokasi-karantina-sc-lps">
            Target Pembelajaran Program Supercamp UTBK SNBT
          </h2>

          <ul className="target-list-wrapper">
            {targets.map((item, index) => (
              <li key={index} className="parent-text-target-belajar-sc-lps">
                <img
                  src={iconLokasi}
                  alt=""
                  className="icon-target-sc-lps"
                  loading="lazy"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={modelTarget}
          alt="Siswa program Supercamp mengikuti bimbingan belajar intensif untuk persiapan UTBK SNBT dan masuk PTN favorit"
          className="model-target-belajar"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default TargetBelajarLps;
