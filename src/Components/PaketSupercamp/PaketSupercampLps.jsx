import "./PaketSupercampLps.css";

const paketData = [
  {
    id: 1,
    name: "Mini Silver",
    img: "/images/paket/supercamp-mini-silver.webp",
    phone: "6282258689993",
    admin: "Nia",
  },
  {
    id: 2,
    name: "Silver",
    img: "/images/paket/supercamp-silver.webp",
    phone: "6281311778441",
    admin: "Fina",
  },
  {
    id: 3,
    name: "Gold",
    img: "/images/paket/supercamp-gold.webp",
    phone: "6282134093567",
    admin: "Lia",
  },
  {
    id: 4,
    name: "Platinum",
    img: "/images/paket/supercamp-platinum.webp",
    phone: "6282258689993",
    admin: "Nia",
  },
  {
    id: 5,
    name: "Priority",
    img: "/images/paket/supercamp-priority.webp",
    phone: "6281311778441",
    admin: "Fina",
  },
];

const PaketSupercampLps = () => {
  return (
    <section className="super-parent-paket-belajar-supercamp-lps">
      <h2 className="title-paket-belajar-supercamp-lps">
        Paket Program Supercamp untuk Persiapan UTBK SNBT & Masuk Kedokteran
      </h2>

      <div className="box-paket-belajar-supercamp-lps">
        {paketData.map((item) => (
          <a
            key={item.id}
            className="img-paket-supercamp-lps"
            href={`https://api.whatsapp.com/send?phone=${item.phone}&text=Halo%20Kak%20${item.admin}%20https://supercampmatrix.co.id%20,%20Saya%20ingin%20daftar%20Program%20Supercamp%20UTBK%20SNBT%20Paket%20${item.name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Daftar Paket Supercamp ${item.name} untuk persiapan UTBK SNBT dan masuk PTN favorit`}>
            <img
              className="img-paket-supercamp-lps-images"
              src={item.img}
              alt={`Paket Supercamp ${item.name} untuk bimbel intensif UTBK SNBT dan persiapan masuk Kedokteran`}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PaketSupercampLps;
