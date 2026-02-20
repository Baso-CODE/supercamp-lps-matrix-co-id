import "./VideoScLps.css";

const VideoScLps = () => {
  return (
    <section className="parent-box-video-sc-lps">
      <h2 className="title-video-sc-lps">Sekilas Tentang Supercamp</h2>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/E5FVSivR8-o?si=AkfXV50KwvNToIxS"
          title="Sekilas Tentang Supercamp"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </section>
  );
};

export default VideoScLps;
