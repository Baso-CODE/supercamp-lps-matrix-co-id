import "./BottomCtaLps.css";

const BottomCtaLps = () => {
  const admins = [
    {
      name: "Kak Fina",
      phone: "6281311778441",
      display: "0813-1177-8441",
      text: "Hallo, Ms. Fina https://supercampmatrix.com , Saya ingin tanya mengenai privat Persiapan Masuk PTN.",
    },
    {
      name: "Kak Nia",
      phone: "6282258689993",
      display: "0822-5868-9993",
      text: "Hallo, Ms. Nia https://supercampmatrix.com , Saya ingin tanya mengenai privat Persiapan Masuk PTN.",
    },
  ];

  return (
    <section className="box-cta-bottom">
      <h2 className="title-cta-bottom-lps">Raih Masa Depan Terbaik</h2>
      <p className="desk-cta-bottom-lps">
        Gabung Sekarang, Sebelum Kehabisan Kursi!
      </p>

      <div className="parent-button-cta">
        {admins.map((admin, index) => (
          <div key={index} className="child-cta-bottom-lps">
            <h3 className="title-cs-lps">
              Admin {index + 1} - {admin.name}
            </h3>
            <p className="no-cs-lps">{admin.display}</p>
            <div className="parent-btn-call-chat">
              <a
                href={`https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(admin.text)}`}
                className="btn-cta-link chat"
                target="_blank"
                rel="noopener noreferrer">
                <span className="material-symbols-outlined">forum</span> CHAT
              </a>
              <a href={`tel:+${admin.phone}`} className="btn-cta-link call">
                <span className="material-symbols-outlined">call</span> CALL
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomCtaLps;
