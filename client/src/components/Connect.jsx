function Connect() {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgb(48, 58, 75)",
          fontWeight: "bold",
          padding: "1rem",
          width: "100vw",
          marginBottom: "3rem",
          marginTop: "3rem",
          textShadow: "1px 1px 10px rgba(255, 170, 76, .6)",
        }}
      >
        Connect
      </h2>

      <div id="contact" className="contact-container">
        <img className = "anchor-img"
          style={{
            background: "rgb(255, 170, 76)",
            width: "2rem",
          }}
          src="/images/tl.webp"
        />
        <a className="footer-anchors" href="mailto:AaronSierp@gmail.com">
          {" "}
          AaronSierp@gmail.com
        </a>
        <img className = "anchor-img-phone"
          style={{
            background: "rgb(255, 170, 76)",
            width: "2rem",
          }}
          src="/images/Phone.png"
        />
        <p className="footer-anchors" >859.420.4144</p>
        <img className = "anchor-img"
          style={{
            background: "rgb(255, 170, 76)",
            width: "2rem",
          }}
          src="/images/github.png"
        />
        <a className="footer-anchors" href="https://github.com/AASierp">
          GitHub
        </a>
        <img className = "anchor-img"
          style={{
            background: "rgb(255, 170, 76)",
            width: "2rem",
          }}
          src="/images/in.svg"
        />
        <a className="footer-anchors"
          href="https://www.linkedin.com/in/aaron-sierp"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default Connect;
